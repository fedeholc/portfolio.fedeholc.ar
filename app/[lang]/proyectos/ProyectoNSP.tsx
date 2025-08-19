import proyectos from "./proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";

import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/err1.webp";
import screenshot2 from "@public/proyecto-nsp/err2.webp";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoErr0r({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: dictionary.proyectos.nsp01[lang],
    bajada: dictionary.proyectos.nsp02[lang],
    stack: (
      <ul>
        <li>Next.js / React / JavaScript</li>
        <li>HTML / CSS </li>
        <li>Markdown</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://www.github.com/fedeholc/err0r`,
    linkWebText: `err0r.fedeholc.ar`,
    linkWebHref: `https://err0r.fedeholc.ar/`,
    subtitulo1: dictionary.proyectos.nsp03[lang],
    texto1: dictionary.proyectos.nsp04[lang],
    subtitulo2: dictionary.proyectos.nsp05[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.nsp06[lang]}</li>
        <li>{dictionary.proyectos.nsp07[lang]}</li>
        <li>{dictionary.proyectos.nsp08[lang]}</li>
        <li>{dictionary.proyectos.nsp09[lang]}</li>
        <li>{dictionary.proyectos.nsp10[lang]}</li>
        <li>{dictionary.proyectos.nsp11[lang]}</li>
        <li>
          {dictionary.proyectos.nsp12a[lang]}{" "}
          <Link
            className={proyectos.decorarLink}
            href="https://btcd.fedeholc.ar"
            target="_blank"
          >
            btcd.fedeholc.ar
          </Link>
          {" ("}
          <Link
            className={proyectos.decorarLink}
            href="https://github.com/fedeholc/btcd.fedeholc.ar"
            target="_blank"
          >
            repo
          </Link>
          {"), "}
          {dictionary.proyectos.nsp12b[lang]}
        </li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.nsp13[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.nsp14[lang]}</li>
        <li>{dictionary.proyectos.nsp15[lang]}</li>
        <li>{dictionary.proyectos.nsp16[lang]}</li>
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
        <div className={proyectos.columns1}>
          <p>{TEXTO.texto1}</p>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure} `}>
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot1}
                alt="screenshot"
                width={700}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.nsp17[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns2}>
          <div>{TEXTO.texto2}</div>
          <div className={proyectos.screenshot__container}>
            <figure
              className={`${proyectos.screenshot__figure} ${proyectos.figure_mt}`}
            >
              <Image
                className={`${proyectos.screenshot} ${proyectos.w100px}`}
                src={screenshot2}
                alt="screenshot"
                width={330}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.nsp18[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo3}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto3}</div>
        </div>
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
