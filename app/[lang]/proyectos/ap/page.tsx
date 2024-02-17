import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-ap/ap1.png";
import screenshot2 from "@public/proyecto-ap/ap2.png";
import screenshot3 from "@public/proyecto-ap/ap5.png";
import screenshot4 from "@public/proyecto-ap/ap4.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

// El sitio web es una aplicación de una sola página (SPA) desarrollada con Angular, que consume una API REST desarrollada con Java, Spring Boot y Hibernate, y que se conecta a una base de datos MySQL. El sitio web está alojado en Firebase, y la API REST en Koyeb. El código fuente está en GitHub.

// La elección de las tecnologías no fue propia sino que fueron las que aprendimos en el curso.

export default async function ProyectoAP({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: dictionary.proyectos.ap01[lang],
    bajada: dictionary.proyectos.ap02[lang],
    stack: (
      <ul>
        <li>Angular / TypeScript / JavaScript</li>
        <li>HTML / CSS / Bootstrap </li>
        <li>Java / Spring Boot / Hibernate</li>
        <li>MySQL</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: {
      front: `frontend`,
      back: `backend`,
    },
    linkCodeHref: {
      front: `https://github.com/fedeholc/argentinaprograma-Portfolio-Frontend`,
      back: `https://github.com/fedeholc/argentinaprograma-Portfolio-Backend`,
    },
    linkWebText: `https://portfolioap-cccf4.web.app/`,
    linkWebHref: `https://portfolioap-cccf4.web.app/`,
    subtitulo2: dictionary.proyectos.ap03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.ap04[lang]}</li>
        <li>{dictionary.proyectos.ap05[lang]}</li>
        <li>{dictionary.proyectos.ap06[lang]}</li>
      </ul>
    ),
    subtitulo3: dictionary.proyectos.ap07[lang],
    texto3: (
      <ul>
        <li>{dictionary.proyectos.ap08[lang]}</li>
        <li>{dictionary.proyectos.ap09[lang]}</li>
        <li>{dictionary.proyectos.ap10[lang]}</li>
        <li>{dictionary.proyectos.ap11[lang]}</li>
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
              &nbsp;
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
          </div>
        </div>
        <br />
        {/* ***************************************** */}
        <div className={proyectos.columns1}>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure} `}>
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot1}
                alt="screenshot"
                quality={100}
                width={600}
              />
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
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.ap12[lang]}
              </figcaption>
            </figure>
          </div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot3}
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.ap13[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo3}</h3>
        <div className={proyectos.columns2}>
          <div>{TEXTO.texto3}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot4}
                alt="screenshot"
                width={350}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                {dictionary.proyectos.ap14[lang]}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
