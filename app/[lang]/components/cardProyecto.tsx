import cardP from "./cardProyecto.module.css";
import "@app/globals.css";
import Link from "next/link";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";
import externalLinkIcon from "@public/external-link.png";
import proyectos from "../proyectos/proyectos.module.css";
import Image from "next/image";
/* todas las cards de los proyectos */
export async function CardsProyectos({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  return (
    <>
      {/*   <CardProyecto
        lang={lang}
        titulo="fotoYOP 🎨"
        buttonLink="/proyectos/#proyectoFotoyop"
        subtitulo={dictionary.cv.proyectos12[lang]}
        descripcion={dictionary.cv.proyectos11[lang]}
        stack={["HTML", "CSS", "React/Next", "TypeScript", "PWA", "Canvas API"]}
      /> */}
      <CardProyecto
        lang={lang}
        titulo="🔐️ JWT Learning Kit"
        buttonLink="/proyectos/#proyectoJWTLK"
        subtitulo={dictionary.cv.proyectos16[lang]}
        descripcion={dictionary.cv.proyectos17[lang]}
        stack={[
          "HTML",
          "CSS",
          "JavaScript",
          "Node / Express",
          "SQLite",
          "Vitest / Playwright",
          "JSDoc",
        ]}
      />

      <CardProyecto
        lang={lang}
        titulo="🩺️ Health Pro"
        buttonLink="/proyectos/#proyectoHealthPro"
        subtitulo={dictionary.cv.proyectos14[lang]}
        descripcion={dictionary.cv.proyectos15[lang]}
        stack={[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node",
          "WebSockets",
          "WebRTC",
        ]}
      />

      <CardProyecto
        lang={lang}
        titulo="🧿 fotoYOP & foto-V 🎬"
        buttonLink="/proyectos/#proyectoFotoyop"
        subtitulo={dictionary.cv.proyectos12[lang]}
        descripcion={dictionary.cv.proyectos13[lang]}
        stack={[
          "HTML",
          "CSS",
          "JavaScript",
          "PWA",
          "React/Next",
          "TypeScript/JSDoc",
          "Canvas API",
          "Vitest/Playwright",
        ]}
      />
      <CardProyecto
        lang={lang}
        buttonLink="/proyectos/#proyectoANOTA"
        titulo="📝 ¡ANOTÁ! & Highlighter"
        subtitulo="¿Another note taking app?"
        descripcion={dictionary.cv.proyectos5[lang]}
        stack={[
          "HTML",
          "CSS",
          "React",
          "NextJs",
          "SQLite",
          "WebExtension API",
          "Supabase Auth",
          "JSDoc",
        ]}
      />
      <CardProyecto
        lang={lang}
        titulo={dictionary.cv.proyectos3a[lang]}
        buttonLink="/proyectos/#proyectoNSP"
        subtitulo={dictionary.cv.proyectos3b[lang]}
        descripcion={dictionary.cv.proyectos4[lang]}
        stack={[
          "HTML",
          "CSS",
          "NextJs / React",
          "Markdown",
          "Github",
          "Vercel",
        ]}
      />

      <CardProyecto
        lang={lang}
        titulo="Full size images for IG 📷"
        buttonLink="/proyectos/#proyectoInsta"
        subtitulo=""
        descripcion={dictionary.cv.proyectos6[lang]}
        stack={["HTML", "CSS", "JavaScript", "WebExtension API"]}
      />
      {/*   <CardProyecto
        lang={lang}
        titulo="MyTvShows 📺"
        buttonLink="/proyectos/#proyectoTV"
        subtitulo=""
        descripcion={dictionary.cv.proyectos8[lang]}
        stack={["HTML", "Tailwind CSS", "React", "Firebase", "Supabase Auth"]}
      /> */}
      {/*   <CardProyecto
        lang={lang}
        titulo="👨‍💻 Argentina Programa "
        buttonLink="/proyectos/#proyectoAP"
        subtitulo={dictionary.cv.proyectos9a[lang]}
        descripcion={dictionary.cv.proyectos10[lang]}
        stack={["HTML", "Bootstrap", "Angular", "MySQL", "Java / Spring Boot"]}
      /> */}
      <div>
        <h3>{dictionary.proyectos.otros[lang]}</h3>
        <div className={proyectos.columns1}>
          <ul>
            <li className={proyectos.smaller_font}>
              <div className={proyectos.link_icon}>
                <span>
                  {dictionary.proyectos.otros1[lang]}&nbsp;
                  <Link
                    className={proyectos.underline}
                    target="_blank"
                    href="https://github.com/fedeholc/tecnicatura-tp-clinica"
                  >
                    {dictionary.proyectos.otrosVerCodigo[lang]}
                  </Link>
                  &nbsp;
                  <Image src={externalLinkIcon} alt="external link icon" />
                </span>
              </div>
            </li>
            <li className={proyectos.smaller_font}>
              <div className={proyectos.link_icon}>
                <span>
                  {dictionary.proyectos.otros2[lang]}&nbsp;
                  <Link
                    className={proyectos.underline}
                    target="_blank"
                    href="https://github.com/fedeholc/tecnicatura-tp-club-deportivo-mobile"
                  >
                    {dictionary.proyectos.otrosVerCodigo[lang]}
                  </Link>
                  &nbsp;
                  <Image src={externalLinkIcon} alt="external link icon" />
                </span>
              </div>
            </li>
            <li className={proyectos.smaller_font}>
              <div className={proyectos.link_icon}>
                <span>
                  {dictionary.proyectos.otros3[lang]}&nbsp;
                  <Link
                    className={proyectos.underline}
                    target="_blank"
                    href="https://github.com/fedeholc/argentinaprograma-Portfolio-Backend"
                  >
                    {dictionary.proyectos.otrosVerCodigo[lang]}
                  </Link>
                  &nbsp;
                  <Image src={externalLinkIcon} alt="external link icon" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
/* componente individual*/
export default async function CardProyecto({
  buttonLink,
  titulo,
  subtitulo,
  descripcion,
  stack,
  lang,
}: {
  buttonLink: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  stack: string[];
  lang: Locale;
}) {
  const dictionary = await getDictionary();
  return (
    <>
      <div className={`${cardP.card__container}`}>
        <div>
          <Link href={buttonLink}>
            <h2 className={cardP.titulo}>{titulo}</h2>
          </Link>
          <h3>{subtitulo}</h3>
        </div>
        <p>{descripcion}</p>
        {/*         <div className={`${cardP.tags__stack}`}>Stack</div>
         */}{" "}
        <div className={`${cardP.tags__container}`}>
          {stack?.map((item, index) => (
            <div key={index} className={`${cardP.tag}`}>
              {item}
            </div>
          ))}
        </div>
        <div className={`${cardP.button__container}`}>
          <Link href={buttonLink} className={cardP.button_ver}>
            {dictionary.cardproyecto[lang]} &raquo;
          </Link>
        </div>
      </div>
    </>
  );
}
