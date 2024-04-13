import proyectos from "../proyectos.module.css";

import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-anota/anota_inicio.webp";
import screenshot2 from "@public/proyecto-anota/anota_highlighter.webp";
import screenshot3 from "@public/proyecto-anota/anota_etiquetas.webp";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoANOTA({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.anota01[lang],
    bajada: dictionary.proyectos.anota02[lang],
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / CSS</li>
        <li>
          <del>Node.js / Express</del> &#x2794; Next.js
        </li>
        <li>
          <del>MySQL</del> &#x2794; SQLite
        </li>
        <li>Supabase Auth</li>
        <li>WebExtension API</li>
        <li>JSDoc</li>
      </ul>
    ),
    linkCodeText: {
      front: `frontend`,
      back: `backend`,
      ext: `highlighter`,
    },
    linkCodeHref: {
      front: `https://github.com/fedeholc/anota-front-react`,
      back: `https://github.com/fedeholc/anota-back-next`,
      ext: `https://github.com/fedeholc/anota-highlighter`,
    },
    linkWebText: ``,
    linkWebHref: ``,
    subtitulo1: ``,
    texto1: ``,
    subtitulo2: dictionary.proyectos.anota03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.anota04[lang]}</li>
        <li>{dictionary.proyectos.anota05[lang]}</li>
        <li>{dictionary.proyectos.anota06[lang]}</li>
        <li>{dictionary.proyectos.anota07[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.anota12[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.anota08[lang]}</li>
        <li>{dictionary.proyectos.anota09[lang]}</li>
        <li>{dictionary.proyectos.anota10[lang]}</li>
        <li>{dictionary.proyectos.anota11[lang]}</li>
      </ul>
    ),
    subtitulo4: dictionary.proyectos.anota13[lang],
    texto4: (
      <ul>
        <li>{dictionary.proyectos.anota14[lang]}</li>
        <li>{dictionary.proyectos.anota15[lang]}</li>
        <li>{dictionary.proyectos.anota16[lang]}</li>
        <li>{dictionary.proyectos.anota17[lang]}</li>
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
                href={TEXTO.linkCodeHref.front}
              >
                {TEXTO.linkCodeText.front}
              </Link>
              &nbsp;/&nbsp;
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref.back}
              >
                {TEXTO.linkCodeText.back}
              </Link>
              &nbsp;/&nbsp;
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref.ext}
              >
                {TEXTO.linkCodeText.ext}
              </Link>
              &nbsp;
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
            <h3>live demo</h3>
            <div className={proyectos.link_icon}>
              <Link
                className={proyectos.underline}
                target="_blank"
                href="https://anota-demo.vercel.app/"
              >
                anota-demo.vercel.app
              </Link>
              &nbsp;
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
          </div>
        </div>
        <br />
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
                {dictionary.proyectos.anota18[lang]}
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
                {dictionary.proyectos.anota19[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo4}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto4}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot3.src}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.anota20[lang]}
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
