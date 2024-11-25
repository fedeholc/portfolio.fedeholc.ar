import proyectos from "../proyectos.module.css";

import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-fotoyop/fotoyop3.webp";
import screenshot2 from "@public/proyecto-fotoyop/fotoyop4.webp";
import screenshot3 from "@public/proyecto-fotoyop/fotov1.webp";

import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoJWTLK({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.jwtlk01[lang],
    bajada: dictionary.proyectos.jwtlk02[lang],
    bajada2: dictionary.proyectos.jwtlk02b[lang],
    stack: (
      <ul>
        <li>HTML / CSS</li>
        <li>Vanilla JavaScript</li>
        <li>Node / Express</li>
        <li>SQLite</li>
        <li>Vitest / Playwright</li>
        <li>JSDoc</li>
      </ul>
    ),
    linkCodeText2: `(docs) github/fedeholc/jwtlk-doc`,
    linkCodeHref2: `https://www.github.com/fedeholc/jwtlk-doc`,
    linkCodeText1: `(app) github/fedeholc/jwtlk`,
    linkCodeHref1: `https://www.github.com/fedeholc/jwtlk`,
    subtitulo2: dictionary.proyectos.jwtlk03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.jwtlk04[lang]}</li>
        <li>{dictionary.proyectos.jwtlk05[lang]}</li>
        <li>{dictionary.proyectos.jwtlk06[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.jwtlk09[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.jwtlk10[lang]}</li>
      </ul>
    ),
    subtitulo4: dictionary.proyectos.jwtlk11[lang],
    texto4: (
      <ul>
        <li>{dictionary.proyectos.jwtlk12[lang]}</li>
        <li>{dictionary.proyectos.jwtlk13[lang]}</li>
        <li>{dictionary.proyectos.jwtlk14[lang]}</li>
        <li>{dictionary.proyectos.jwtlk15[lang]}</li>
        {/*         <li>{dictionary.proyectos.fotoyop16[lang]}</li>
         */}{" "}
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
        <p>
          {TEXTO.bajada2}{" "}
          <strong>
            <Link
              target="_blank"
              className={proyectos.underline}
              href="https://jwtlk.fedeholc.ar"
            >
              jwtlk.fedeholc.ar
            </Link>
          </strong>
        </p>
        <div className={proyectos.columns2stack}>
          <div>
            <h3>stack</h3>
            {TEXTO.stack}
          </div>
          <div>
            <h3>{dictionary.proyectos.codigo[lang]}</h3>
            <div
              style={{ marginBlock: "1rem" }}
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
            <div
              style={{ marginBlock: "1rem" }}
              className={proyectos.link_icon}
            >
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref2}
              >
                {TEXTO.linkCodeText2}
              </Link>
              &nbsp;
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
            <h3 style={{ marginTop: "2rem" }}>website</h3>
            <div
              style={{ marginBlock: "1rem" }}
              className={proyectos.link_icon}
            >
              <Link
                className={proyectos.underline}
                target="_blank"
                href="https://jwtlk.fedeholc.ar/"
              >
                jwtlk.fedeholc.ar
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
                {dictionary.proyectos.jwtlk17[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto2}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot2.src}
              />

              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.jwtlk18[lang]}
              </figcaption>
            </figure>
          </div>
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
