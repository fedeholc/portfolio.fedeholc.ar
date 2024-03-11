import proyectos from "../proyectos.module.css";

import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-fotoyop/fotoyop1.webp";
import screenshot2 from "@public/proyecto-fotoyop/fotoyop2.webp";

import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoFotoyop({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.fotoyop01[lang],
    bajada: dictionary.proyectos.fotoyop02[lang],
    stack: (
      <ul>
        <li>HTML / CSS</li>
        <li>Next / React</li>
        <li>TypeScript</li>
        <li>PWA</li>
        <li>Canvas API</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://www.github.com/fedeholc/fotoyop`,
    subtitulo2: dictionary.proyectos.fotoyop03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.fotoyop04[lang]}</li>
        <li>{dictionary.proyectos.fotoyop05[lang]}</li>
        <li>{dictionary.proyectos.fotoyop06[lang]}</li>
        <li>{dictionary.proyectos.fotoyop07[lang]}</li>
        <li>{dictionary.proyectos.fotoyop08[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.fotoyop09[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.fotoyop10[lang]}</li>
      </ul>
    ),
    subtitulo4: dictionary.proyectos.fotoyop11[lang],
    texto4: (
      <ul>
        <li>{dictionary.proyectos.fotoyop12[lang]}</li>
        <li>{dictionary.proyectos.fotoyop13[lang]}</li>
        <li>{dictionary.proyectos.fotoyop14[lang]}</li>
        <li>{dictionary.proyectos.fotoyop15[lang]}</li>
        <li>{dictionary.proyectos.fotoyop16[lang]}</li>
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
        <div className={proyectos.columns2stack}>
          <div>
            <h3>stack</h3>
            {TEXTO.stack}
          </div>
          <div>
            <h3>{dictionary.proyectos.codigo[lang]}</h3>
            <div className={proyectos.link_icon}>
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref}
              >
                {TEXTO.linkCodeText}
              </Link>
            </div>
            <h3>live demo</h3>
            <div className={proyectos.link_icon}>
              <Link
                className={proyectos.underline}
                target="_blank"
                href="https://fotoyopdemo.fedeholc.ar/"
              >
                fotoyopdemo.fedeholc.ar
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
                {dictionary.proyectos.fotoyop17[lang]}
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
                {dictionary.proyectos.fotoyop17[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo4}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto4}</div>
        </div>
        {/* ***************************************** */}
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
