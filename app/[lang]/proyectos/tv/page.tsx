/* cSpell:enable */
import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot2 from "@public/proyecto-mytv/mytv1.png";
import screenshot1 from "@public/proyecto-mytv/mytv2.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoTV({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: `MyTvShows`,
    bajada: dictionary.proyectos.tv01[lang],
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / Tailwind CSS</li>
        <li>Firebase</li>
        <li>Supabase Auth</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://github.com/fedeholc/MyTvShows`,
    linkWebText: ``,
    linkWebHref: ``,
    subtitulo1: dictionary.proyectos.tv02[lang],
    texto1: dictionary.proyectos.tv03[lang],
    subtitulo2: dictionary.proyectos.tv04[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.tv05[lang]}</li>
        <li>{dictionary.proyectos.tv06[lang]}</li>
        <li>{dictionary.proyectos.tv07[lang]}</li>
        <li>{dictionary.proyectos.tv08[lang]}</li>
        <li>{dictionary.proyectos.tv09[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.tv10[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.tv11[lang]}</li>
        <li>{dictionary.proyectos.tv12[lang]}</li>
        <li>{dictionary.proyectos.tv13[lang]}</li>
        <li>{dictionary.proyectos.tv14[lang]}</li>
        <li>{dictionary.proyectos.tv15[lang]}</li>
      </ul>
    ),
  };

  return (
    <div className={proyectos.proyecto}>
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
            {/* <h3>web</h3>
            <div className={proyectos.link_icon}>
              <Link target="_blank" href={TEXTO.linkWebHref}>
                {TEXTO.linkWebText}&nbsp;
              </Link>
              <Image src={externalLinkIcon} alt="external link icon" />
            </div> */}
          </div>
        </div>
        <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo1}</h3>
        <div className={proyectos.columns1}>
          <p>{TEXTO.texto1}</p>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}`}>
              {" "}
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot1}
                alt="screenshot"
                width={700}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.tv16[lang]}
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
            <figure className={`${proyectos.screenshot__figure}`}>
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot2}
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.tv17[lang]}
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
