import proyectos from "./proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-health/health1.webp";

import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoHealthPro({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.health01[lang],
    bajada: dictionary.proyectos.health02[lang],
    bajada2: dictionary.proyectos.health02b[lang],
    stack: (
      <ul>
        <li>HTML / CSS</li>
        <li>React</li>
        <li>Node</li>
        <li>WebSockets</li>
        <li>WebRTC</li>
      </ul>
    ),
    linkCodeText1: `github.com/No-Country-simulation/c21-m-15-java-react`,
    linkCodeHref1: `https://github.com/No-Country-simulation/c21-m-15-java-react`,
    subtitulo2: dictionary.proyectos.health03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.health04[lang]}</li>
        <li>{dictionary.proyectos.health05[lang]}</li>
        <li>{dictionary.proyectos.health06[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.health09[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.health10[lang]}</li>
      </ul>
    ),
    subtitulo4: dictionary.proyectos.health11[lang],
    texto4: (
      <ul>
        <li>{dictionary.proyectos.health12[lang]}</li>
        <li>{dictionary.proyectos.health13[lang]}</li>
        <li>{dictionary.proyectos.health14[lang]}</li>
      </ul>
    ),
  };

  return (
    <div className={`${proyectos.proyecto}`}>
      <div className={proyectos.header}>
        {dictionary.proyectos.proyecto[lang]}
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <div className={`${proyectos.proyecto__container} `}>
        <p>{TEXTO.bajada}</p>
        <p>{TEXTO.bajada2}</p>
        <div className={proyectos.columns2stack}>
          <div>
            <h3>stack</h3>
            {TEXTO.stack}
          </div>
          <div>
            <h3>{dictionary.proyectos.codigo[lang]}</h3>
            <div
              style={{ marginBlock: "1rem", maxWidth: "270px" }}
              className={proyectos.link_icon}
            >
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref1}
              >
                {TEXTO.linkCodeText1}
              </Link>
              &nbsp;
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
          </div>
        </div>
        <br />
        <h3>{TEXTO.subtitulo3}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto3}</div>
        </div>
        {/* ***************************************** */}
        <div className={proyectos.columns1}>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot1.src}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.health17[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto2}</div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo4}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto4}</div>
        </div>{" "}
        <br />
        {/* ***************************************** */}
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
