import proyectos from "../proyectos/proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import paperclipIcon from "@public/paperclip.png";
import { CardsProyectos } from "@app/[lang]/components/cardProyecto";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default async function CV({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header_cv}>{dictionary.cv.heading[lang]}</div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={`${proyectos.proyecto__container} `}>
        <div className="centrar">
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="paper clip icon"
                width="12"
                /* height="12" */
                src={paperclipIcon}
              ></Image>
              &nbsp;
              <Link
                locale={false}
                href={`/cv/${dictionary.cv.nombreArchivo[lang]}`}
                target="_blank"
              >
                {dictionary.cv.downloadPDF[lang]}
              </Link>
            </div>
          </button>
          <br />
        </div>
        <div className={proyectos.columns1}>
          <section>
            <h3>{dictionary.cv.calificaciones1[lang]}</h3>
            <p>{dictionary.cv.calificaciones2[lang]}</p>
            <ul className={proyectos.columns2stack}>
              <li>HTML / CSS</li>
              <li>MySQL / SQLite</li>
              <li>JavaScript / React / Next.js</li>
              <li>JSDocs / TypeScript</li>
              {/*               <li>WebExtension API</li>
               */}{" "}
              <li>Testing (Vitest/Jest, Playwright)</li>
              <li>Node.js / Express</li>
              <li>Responsive web design</li>
              <li>Git / GitHub</li>
            </ul>
          </section>

          <section>
            <h3>{dictionary.cv.proyectos1[lang]}</h3>
            <div className={proyectos.cv__cards__container}>
              <CardsProyectos lang={lang} />
            </div>
          </section>
          <section>
            <h3>{dictionary.cv.idiomas1[lang]}</h3>
            <ul>
              <li>
                <strong>{dictionary.cv.idiomas2a[lang]}</strong>{" "}
                {dictionary.cv.idiomas2b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.idiomas2c[lang]}</strong>{" "}
                {dictionary.cv.idiomas2d[lang]}
              </li>
            </ul>
          </section>
          <section>
            <h3>{dictionary.cv.academia1[lang]}</h3>
            <ul>
              <li>
                <strong>{dictionary.cv.academia2a[lang]}</strong>{" "}
                {dictionary.cv.academia2b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.academia6a[lang]}</strong>{" "}
                {dictionary.cv.academia6b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.academia5a[lang]}</strong>{" "}
                {dictionary.cv.academia5b[lang]}
              </li>

              <li>
                <strong>{dictionary.cv.academia4a[lang]}</strong>{" "}
                {dictionary.cv.academia4b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.academia3a[lang]}</strong>{" "}
                {dictionary.cv.academia3b[lang]}
              </li>
            </ul>
          </section>
          <section>
            <h3>{dictionary.cv.cursos1[lang]}</h3>
            <ul>
              <li>
                <strong>{dictionary.cv.cursos2a[lang]}</strong>{" "}
                {dictionary.cv.cursos2b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.cursos3a[lang]}</strong>{" "}
                {dictionary.cv.cursos3b[lang]}
              </li>
              {/*        <li>
                <strong>{dictionary.cv.cursos4a[lang]}</strong>{" "}
                {dictionary.cv.cursos4b[lang]}
              </li>
              <li>
                <strong>{dictionary.cv.cursos5a[lang]}</strong>{" "}
                {dictionary.cv.cursos5b[lang]}
              </li> */}
              {/*  <li>
                <strong>{dictionary.cv.cursos6a[lang]}</strong>{" "}
                {dictionary.cv.cursos6b[lang]}
              </li> */}
              <li>
                <strong>{dictionary.cv.cursos7a[lang]}</strong>&nbsp;
                {dictionary.cv.cursos7b[lang]}
              </li>
            </ul>
          </section>
          <section>
            <h3>{dictionary.cv.experiencias1[lang]}</h3>
            <p>
              <strong>{dictionary.cv.experiencias5a[lang]}</strong>
            </p>
            <ul>
              <li>{dictionary.cv.experiencias5b[lang]}</li>
            </ul>
            <p>
              <strong>{dictionary.cv.experiencias4a[lang]}</strong>
            </p>
            <ul>
              <li>{dictionary.cv.experiencias4b[lang]}</li>
              <li>{dictionary.cv.experiencias4c[lang]}</li>
            </ul>
            <p>
              <strong>{dictionary.cv.experiencias3a[lang]}</strong>
            </p>
            <ul>
              <li>{dictionary.cv.experiencias3b[lang]}</li>
              <li>{dictionary.cv.experiencias3c[lang]}</li>
            </ul>
            <p>
              <strong>{dictionary.cv.experiencias2a[lang]}</strong>
            </p>
            <ul>
              <li>{dictionary.cv.experiencias2b[lang]}</li>
              <li>{dictionary.cv.experiencias2c[lang]}</li>
            </ul>
          </section>
        </div>
      </div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
