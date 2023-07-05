import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png";

export default function ProyectoANOTA() {
  const TEXTO = {
    titulo: `x`,
    bajada: `x`,
    stack: (
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ),
    linkCodeText: `github/fedeholc  xxx`,
    linkCodeHref: `https://www.github.com/fedeholc`,
    linkWebText: `xxxx`,
    linkWebHref: `xxxxxxx`,
    subtitulo1: `Objetivo`,
    texto1: `xxxxx`,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
      </ul>
    ),
  };

  return (
    <div className={proyectos.proyecto}>
      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <p>{TEXTO.bajada}</p>
      <div className={proyectos.columns2}>
        <div>
          <h3>stack</h3>
          {TEXTO.stack}
        </div>
        <div>
          <h3>código</h3>
          <div className={proyectos.link_icon}>
            <Link target="_blank" href={TEXTO.linkCodeHref}>
              {TEXTO.linkCodeText}&nbsp;
            </Link>
            <Image src={externalLinkIcon} alt="external link icon" />
          </div>
          <h3>web</h3>
          <div className={proyectos.link_icon}>
            <Link target="_blank" href={TEXTO.linkWebHref}>
              {TEXTO.linkWebText}&nbsp;
            </Link>
            <Image src={externalLinkIcon} alt="external link icon" />
          </div>
        </div>
      </div>
      <br />
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo1}</h3>
      <div className={proyectos.columns2}>
        <div>{TEXTO.texto1}</div>

        <div>
          <Link
            target="_blank"
            href="../public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png"
          >
            <Image
              className={proyectos.screenshot}
              src={screenshot1}
              alt="screenshot"
              quality={100}
            />
          </Link>
        </div>
      </div>
      <br /> <br />
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo2}</h3>
      <div className={proyectos.columns1}>
        <div>{TEXTO.texto2}</div>
        <div className={proyectos.screenshot__container}>
          <Image
            className={proyectos.screenshot}
            src={screenshot1}
            alt="screenshot"
            quality={100}
          />
        </div>
      </div>
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo3}</h3>
      <div className={proyectos.columns1}>
        <div>{TEXTO.texto3}</div>
        <Image
          className={proyectos.screenshot}
          src={screenshot1}
          alt="screenshot"
        />
      </div>
    </div>
  );
}
