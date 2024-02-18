import proyectos from "../proyectos.module.css";
import "@app/globals.css";

import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-ig/igvideo.webp";
import screenshot2 from "@public/proyecto-ig/ig1.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoInsta({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: `Full Size Images for IG`,
    bajada: dictionary.proyectos.insta01[lang],
    stack: (
      <ul>
        <li>JavaScript</li>
        <li>HTML / CSS</li>
        <li>WebExtension API</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://github.com/fedeholc/full-size-images-for-ig`,
    linkWebText: `chrome web store`,
    linkWebHref: `https://chrome.google.com/webstore/detail/full-size-images-for-ig/eanpijghoobafibemccmoleollpjhcgg`,
    subtitulo1: dictionary.proyectos.insta02[lang],
    texto1: dictionary.proyectos.insta03[lang],
    subtitulo2: dictionary.proyectos.insta04[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.insta05[lang]}</li>
        <li>{dictionary.proyectos.insta06[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.insta07[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.insta08[lang]}</li>
        <li>{dictionary.proyectos.insta09[lang]}</li>
        <li>{dictionary.proyectos.insta10[lang]}</li>
        <li>{dictionary.proyectos.insta11[lang]}</li>
        <li>{dictionary.proyectos.insta12[lang]}</li>
        <li>{dictionary.proyectos.insta13[lang]}</li>
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
            <figure className={`${proyectos.screenshot__figure}  `}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot1.src}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.insta14[lang]}
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
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot2}
                width={700}
                alt="screenshot"
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.insta15[lang]}
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
