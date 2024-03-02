import cardP from "./cardProyecto.module.css";
import "@app/globals.css";
import Link from "next/link";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

/* todas las cards de los proyectos */
export async function CardsProyectos({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  return (
    <>
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
        buttonLink="/proyectos/#proyectoANOTA"
        titulo="📝 ¡ANOTÁ! & Highlighter"
        subtitulo="¿Another note taking app?"
        descripcion={dictionary.cv.proyectos5[lang]}
        stack={[
          "HTML",
          "CSS",
          "React",
          "NextJs",
          "SQLite (Turso)",
          "WebExtension API",
          "Supabase Auth",
          "JSDoc",
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
      <CardProyecto
        lang={lang}
        titulo="MyTvShows 📺"
        buttonLink="/proyectos/#proyectoTV"
        subtitulo=""
        descripcion={dictionary.cv.proyectos8[lang]}
        stack={["HTML", "Tailwind CSS", "React", "Firebase", "Supabase Auth"]}
      />
      <CardProyecto
        lang={lang}
        titulo="👨‍💻 Argentina Programa "
        buttonLink="/proyectos/#proyectoAP"
        subtitulo={dictionary.cv.proyectos9a[lang]}
        descripcion={dictionary.cv.proyectos10[lang]}
        stack={["HTML", "Bootstrap", "Angular", "MySQL", "Java / Spring Boot"]}
      />
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
