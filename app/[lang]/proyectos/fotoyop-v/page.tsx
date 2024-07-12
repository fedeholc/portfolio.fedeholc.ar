import proyectos from "../proyectos.module.css";

import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-fotoyop/fotoyop3.webp";
import screenshot2 from "@public/proyecto-fotoyop/fotoyop4.webp";

import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoFotoyop2({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.fotoyopv01[lang],
    bajada: dictionary.proyectos.fotoyopv02[lang],
    bajada2: dictionary.proyectos.fotoyopv02b[lang],
    stack: (
      <ul>
        <li>HTML / CSS</li>
        <li>Vanilla JavaScript</li>
        <li>Next / React</li>
        <li>TypeScript / JSDoc</li>
        <li>Vitest / Playwright</li>
        <li>PWA</li>
        <li>Canvas API</li>
      </ul>
    ),
    linkCodeText1: `github/fedeholc/fotoyop`,
    linkCodeHref1: `https://www.github.com/fedeholc/fotoyop`,
    linkCodeText2: `github/fedeholc/foto-v`,
    linkCodeHref2: `https://www.github.com/fedeholc/foto-v`,
    subtitulo2: dictionary.proyectos.fotoyopv03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.fotoyopv04[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv05[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv06[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv07[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.fotoyopv09[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.fotoyopv10[lang]}</li>
      </ul>
    ),
    subtitulo4: dictionary.proyectos.fotoyopv11[lang],
    texto4: (
      <ul>
        <li>{dictionary.proyectos.fotoyopv12[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv13[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv14[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv15[lang]}</li>
        {/*         <li>{dictionary.proyectos.fotoyop16[lang]}</li>
         */}{" "}
        <li>{dictionary.proyectos.fotoyopv20[lang]}</li>
      </ul>
    ),
    subtitulo5: dictionary.proyectos.fotoyopv21[lang],
    texto5: (
      <ul>
        <li>{dictionary.proyectos.fotoyopv22[lang]}</li>
        <li>{dictionary.proyectos.fotoyopv23[lang]}</li>
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
            <h3 style={{ marginTop: "2rem" }}>live demos</h3>
            <div
              style={{ marginBlock: "1rem" }}
              className={proyectos.link_icon}
            >
              <Link
                className={proyectos.underline}
                target="_blank"
                href="https://fotoyop.fedeholc.ar/"
              >
                fotoyop.fedeholc.ar
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
                href="https://foto-v.fedeholc.ar/"
              >
                foto-v.fedeholc.ar
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
                {dictionary.proyectos.fotoyopv17[lang]}
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
                {dictionary.proyectos.fotoyopv18[lang]}
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
        <h3>{TEXTO.subtitulo5}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto5}</div>
        </div>
        {/* ***************************************** */}
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
