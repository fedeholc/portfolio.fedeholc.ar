#!/usr/bin/env node
/**
 * build-cv.mjs
 *
 * Convierte los CV en Markdown a .docx y .pdf.
 *
 * Los archivos Markdown de `public/cv/` son la FUENTE DE VERDAD del CV.
 * Este script los toma y regenera, para cada uno:
 *
 *   1. <nombre>.md  --(pandoc)-->  <nombre>.docx
 *   2. <nombre>.docx --(libreoffice)--> <nombre>.pdf
 *
 * Uso:
 *   npm run cv:build
 *
 * Requisitos (deben estar en el PATH):
 *   - pandoc       https://pandoc.org/installing.html
 *   - libreoffice  (comando `soffice` o `libreoffice`)
 *
 * Para editar el CV: modificá el .md y volvé a correr `npm run cv:build`.
 */
import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CV_DIR = join(ROOT, "public", "cv");

// Perfil aislado de LibreOffice para poder correrlo en headless sin pisar
// una instancia que ya esté abierta.
const LO_PROFILE = join(tmpdir(), "portfolio-cv-lo-profile");

function commandExists(bin) {
  const result = spawnSync(bin, ["--version"], { stdio: "ignore" });
  return !result.error;
}

function run(bin, args) {
  const result = spawnSync(bin, args, { stdio: "inherit" });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`"${bin} ${args.join(" ")}" terminó con código ${result.status}`);
  }
}

function findSoffice() {
  for (const bin of ["soffice", "libreoffice"]) {
    if (commandExists(bin)) return bin;
  }
  return null;
}

function main() {
  const pandocBin = commandExists("pandoc") ? "pandoc" : null;
  const sofficeBin = findSoffice();

  if (!pandocBin || !sofficeBin) {
    console.error("\n❌ Faltan herramientas para convertir el CV:\n");
    if (!pandocBin) {
      console.error("   • pandoc no está instalado (https://pandoc.org/installing.html)");
      console.error("     Debian/Ubuntu: sudo apt install pandoc");
    }
    if (!sofficeBin) {
      console.error("   • LibreOffice no está instalado (comando `soffice`)");
      console.error("     Debian/Ubuntu: sudo apt install libreoffice");
    }
    console.error("");
    process.exit(1);
  }

  // README.md documenta esta carpeta; no es un CV, así que no se convierte.
  const markdownFiles = readdirSync(CV_DIR)
    .filter((file) => file.toLowerCase().endsWith(".md"))
    .filter((file) => file.toLowerCase() !== "readme.md")
    .sort();

  if (markdownFiles.length === 0) {
    console.error(`\n❌ No hay archivos .md en ${CV_DIR}\n`);
    process.exit(1);
  }

  console.log(`\n📄 Convirtiendo ${markdownFiles.length} CV desde ${CV_DIR}\n`);

  for (const markdownFile of markdownFiles) {
    const base = markdownFile.replace(/\.md$/i, "");
    const mdPath = join(CV_DIR, markdownFile);
    const docxPath = join(CV_DIR, `${base}.docx`);

    console.log(`▶ ${markdownFile}`);

    // 1) Markdown -> DOCX
    run(pandocBin, [mdPath, "-f", "gfm", "-o", docxPath]);
    console.log(`  ✓ ${base}.docx`);

    // 2) DOCX -> PDF (LibreOffice escribe el PDF en el mismo directorio)
    run(sofficeBin, [
      "--headless",
      `-env:UserInstallation=file://${LO_PROFILE}`,
      "--convert-to",
      "pdf",
      "--outdir",
      CV_DIR,
      docxPath,
    ]);
    console.log(`  ✓ ${base}.pdf\n`);
  }

  console.log("✅ Listo.\n");
}

main();
