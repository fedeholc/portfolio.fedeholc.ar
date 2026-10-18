import proyectos from "../proyectos/proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import paperclipIcon from "@public/paperclip.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default async function CV({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary();
  const cv = dictionary.cv;

  const experienciaActualBloques: { titulo: string; items: string[] }[] = [
    {
      titulo: cv.nExpIA[lang],
      items: [cv.nExpIA1[lang], cv.nExpIA2[lang], cv.nExpIA3[lang], cv.nExpIA4[lang]],
    },
    {
      titulo: cv.nExpProd[lang],
      items: [cv.nExpProd1[lang], cv.nExpProd2[lang], cv.nExpProd3[lang]],
    },
    {
      titulo: cv.nExpInfra[lang],
      items: [
        cv.nExpInfra1[lang],
        cv.nExpInfra2[lang],
        cv.nExpInfra3[lang],
        cv.nExpInfra4[lang],
      ],
    },
    {
      titulo: cv.nExpCal[lang],
      items: [cv.nExpCal1[lang], cv.nExpCal2[lang], cv.nExpCal3[lang]],
    },
  ];

  const skills: string[] = [
    cv.nSkillsIA[lang],
    cv.nSkillsFront[lang],
    cv.nSkillsBack[lang],
    cv.nSkillsTest[lang],
    cv.nSkillsDevops[lang],
    cv.nSkillsOtros[lang],
  ];

  const propios: { titulo: string; texto: string; href: string }[] = [
    {
      titulo: "Full size images for IG",
      texto: cv.nProyIG[lang],
      href: `/${lang}/proyectos#proyectoInsta`,
    },
    {
      titulo: "fotoYOP & foto-V",
      texto: cv.nProyFotoyop[lang],
      href: `/${lang}/proyectos#proyectoFotoyop`,
    },
    {
      titulo: "JWT Learning Kit",
      texto: cv.nProyJWT[lang],
      href: `/${lang}/proyectos#proyectoJWTLK`,
    },
  ];

  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header_cv}>{dictionary.cv.heading[lang]}</div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={`${proyectos.proyecto__container} `}>
        <div className="cv-centrar">
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
                href={`/cv/${dictionary.cv.nombreArchivo[lang]}.pdf`}
                target="_blank"
              >
                {dictionary.cv.downloadPDF[lang]}
              </Link>
            </div>
          </button>
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
                href={`/cv/${dictionary.cv.nombreArchivo[lang]}.docx`}
                target="_blank"
              >
                {dictionary.cv.downloadDOC[lang]}
              </Link>
            </div>
          </button>
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
                href={`/cv/${dictionary.cv.nombreArchivo[lang]}.md`}
                target="_blank"
              >
                {dictionary.cv.downloadMD[lang]}
              </Link>
            </div>
          </button>
          <br />
        </div>
        <br></br>

        <div className={proyectos.columns1}>
          <section>
            <h3>{cv.nPerfil1[lang]}</h3>
            <p>{cv.nPerfil2[lang]}</p>
          </section>

          <section>
            <h3>{cv.nExp1[lang]}</h3>

            <p>
              <strong>{cv.nExpActualA[lang]}</strong>
            </p>
            <p>{cv.nExpActualB[lang]}</p>
            {experienciaActualBloques.map((bloque, index) => (
              <div key={index}>
                <h3>{bloque.titulo}</h3>
                <ul>
                  {bloque.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <p>
              <strong>{cv.nExpNCa[lang]}</strong>
            </p>
            <ul>
              <li>{cv.nExpNCb[lang]}</li>
            </ul>

            <p>
              <strong>{cv.nExpDocA[lang]}</strong>
            </p>
            <ul>
              <li>{cv.nExpDocB[lang]}</li>
            </ul>
          </section>

          <section>
            <h3>{cv.nSkills1[lang]}</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{cv.nProyH[lang]}</h3>
            <p>{cv.nProyIntro[lang]}</p>
            <ul>
              {propios.map((proyecto, index) => (
                <li key={index}>
                  <strong>{proyecto.titulo}</strong> — {proyecto.texto}{" "}
                  <Link className={proyectos.underline} href={proyecto.href}>
                    {dictionary.cardproyecto[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{cv.nForm1[lang]}</h3>
            <ul>
              <li>
                <strong>{cv.nForm2a[lang]}</strong> {cv.nForm2b[lang]}
              </li>
              <li>{cv.nForm3[lang]}</li>
              <li>{cv.nForm4[lang]}</li>
            </ul>
          </section>

          <section>
            <h3>{dictionary.cv.cursos1[lang]}</h3>
            <p>{cv.nCursos[lang]}</p>
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
        </div>
      </div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
