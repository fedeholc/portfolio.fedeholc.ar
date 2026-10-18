//Next.js
"use client";
import { useEffect } from "react";
//icons
import Image from "next/image";
import moonIcon from "@public/moon-filled.png";
import brightIcon from "@public/brightness-up.png";
//styles
import navbar from "./components/navbar.module.css";
import "@app/globals.css";

type ThemeName = "light" | "dark";

// Lee el tema guardado validando que sea un valor conocido.
// localStorage puede lanzar (storage bloqueado / modo privado), por eso el try.
function readStoredTheme(): ThemeName | null {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    /* sin acceso a localStorage: seguimos con la preferencia del sistema */
  }
  return null;
}

function writeStoredTheme(theme: ThemeName) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* sin acceso a localStorage: el tema igual se aplica en esta sesión */
  }
}

function getSystemTheme(): ThemeName {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Theme({ buttonTitle }: { buttonTitle: string }) {
  // El tema guardado / del sistema se aplica al body. Los íconos NO dependen
  // de este efecto: se renderizan siempre y el CSS muestra el correcto según
  // body[data-theme] (o la preferencia del sistema si todavía no hay data-theme).
  useEffect(() => {
    const initial = readStoredTheme() ?? getSystemTheme();
    writeStoredTheme(initial);
    document.body.dataset.theme = initial;
  }, []);

  const handleChangeTheme = () => {
    const attr = document.body.dataset.theme;
    const current: ThemeName =
      attr === "light" || attr === "dark" ? attr : getSystemTheme();
    const newTheme: ThemeName = current === "light" ? "dark" : "light";
    document.body.dataset.theme = newTheme;
    writeStoredTheme(newTheme);
  };

  return (
    <div>
      <button
        title={buttonTitle}
        className={navbar.theme__toggler}
        onClick={handleChangeTheme}
      >
        {/* Cuando el tema es claro se ofrece pasar a oscuro (luna) y viceversa (sol) */}
        <Image
          className={`${navbar.icon} ${navbar.icon_moon}`}
          alt="moon icon"
          width="40"
          height="40"
          src={moonIcon}
        ></Image>
        <Image
          className={`${navbar.icon} ${navbar.icon_sun}`}
          alt="brightness icon"
          width="40"
          height="40"
          src={brightIcon}
        ></Image>
      </button>
    </div>
  );
}
