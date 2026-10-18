import proyectos from "./proyectos.module.css";
import "@app/globals.css";

import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-emd/emd1.webp";
import screenshot2 from "@public/proyecto-emd/emd2.webp";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoEMD({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();
  const p = dictionary.proyectos;

  const TEXTO = {
    titulo: p.empleo01[lang],
    bajada: p.empleo02[lang],
    stack: (
      <ul>
        <li>React 19 / TypeScript</li>
        <li>Astro</li>
        <li>Node.js / Express</li>
        <li>Sequelize / MySQL / Redis</li>
        <li>Gemini / Vertex AI</li>
        <li>Docker / nginx / CI-CD</li>
        <li>Vitest / Playwright</li>
      </ul>
    ),
    linkWebText: p.empleo22[lang],
    linkWebHref: "https://www.empleosmundodigital.com/",
    bloques: [
      { titulo: p.empleo18[lang], items: [p.empleo19[lang], p.empleo20[lang], p.empleo21[lang], p.empleo24[lang]] },
      { titulo: p.empleo09[lang], items: [p.empleo10[lang], p.empleo11[lang], p.empleo12[lang]] },
      { titulo: p.empleo13[lang], items: [p.empleo14[lang], p.empleo15[lang], p.empleo16[lang], p.empleo17[lang]] },
      { titulo: p.empleo04[lang], items: [p.empleo05[lang], p.empleo06[lang], p.empleo07[lang], p.empleo08[lang]] },
    ],
  };

  return (
    <div className={`${proyectos.proyecto}`}>
      <div className={proyectos.header}>{p.trabajo[lang]}</div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <div className={`${proyectos.proyecto__container} `}>
        <p>
          <strong>{TEXTO.bajada}</strong>
        </p>
        <p>{p.empleo03[lang]}</p>
        <div className={proyectos.columns2stack}>
          <div>
            <h3>stack</h3>
            {TEXTO.stack}
          </div>
          <div>
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
        <div className={proyectos.screenshot__container}>
          <figure className={`${proyectos.screenshot__figure}  `}>
            <Image
              className={`${proyectos.screenshot}  `}
              src={screenshot1}
              width={700}
              alt="Empleos Mundo Digital - home"
              quality={100}
            />
            <figcaption className={proyectos.screenshot__caption}>
              {p.empleo23[lang]}
            </figcaption>
          </figure>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        {TEXTO.bloques.map((bloque, index) => (
          <div key={index}>
            <h3>{bloque.titulo}</h3>
            <div className={proyectos.columns1}>
              <ul>
                {bloque.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
            <br />
          </div>
        ))}
        {/* ***************************************** */}
        <div className={proyectos.screenshot__container}>
          <figure className={`${proyectos.screenshot__figure}  `}>
            <Image
              className={`${proyectos.screenshot}  `}
              src={screenshot2}
              width={320}
              alt="Empleos Mundo Digital - mobile"
              quality={100}
            />
            <figcaption className={proyectos.screenshot__caption}>
              {p.empleo23[lang]}
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
