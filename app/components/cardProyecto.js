import cardP from "./cardProyecto.module.css";
import "@app/globals.css";
import Link from "next/link";

/* componente individual*/
export default function CardProyecto({
  children,
  buttonLink,
  titulo,
  subtitulo,
  descripcion,
  stack,
}) {
  return (
    <>
      <div className={`${cardP.card__container}`}>
        <div>
          <Link href={buttonLink}>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
          </Link>
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
            Ver proyecto &raquo;
          </Link>
        </div>
        {children}
      </div>
    </>
  );
}

/* todas las cards de los proyectos */
export function CardsProyectos() {
  return (
    <>
      <CardProyecto
        titulo="<NuncaSupeProgramar/>"
        buttonLink="/proyectos/#proyectoNSP"
        subtitulo="Blog de apuntes para aprender desarrollo web 👾"
        descripcion="El blog sigue siendo una de las mejores herramientas para aprender, organizar apuntes, y compartir el conocimiento. Sencillo, rápido, y accesible."
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
        buttonLink="/proyectos/#proyectoANOTA"
        titulo="📝 ¡ANOTÁ! "
        subtitulo="¿Another note taking app?"
        descripcion="¡Así es, otra más! =) Creada para aprender a hacer una SPA en React, integrando frontend, backend, BBDD, y una extensión para el navegador."
        stack={[
          "HTML",
          "CSS",
          "React",
          "MySQL",
          "Node / Express",
          "Chrome API",
        ]}
      />

      <CardProyecto
        titulo="Full size images for IG 📷"
        buttonLink="/proyectos/#proyectoInsta"
        subtitulo=""
        descripcion="Extensión para el navegador Chrome que permite ver imágenes de Instagram a máxima resolución y en pantalla completa, sin distracciones."
        stack={["HTML", "CSS", "JavaScript", "Chrome API"]}
      />
      <CardProyecto
        titulo="MyTvShows 📺"
        buttonLink="/proyectos/#proyectoTV"
        subtitulo=""
        descripcion="Una aplicación que te permite llevar registro de tus series favoritas y ver fácilmente cuáles tienen nuevos episodios."
        stack={["HTML", "Tailwind CSS", "React", "Firebase", "Supabase Auth"]}
      />
      <CardProyecto
        titulo="👨‍💻 Argentina Programa "
        buttonLink="/proyectos/#proyectoAP"
        subtitulo="Trabajo final del curso de desarrollo web full stack"
        descripcion="Es un sitio web a modo de C.V. online que integra distintas tecnologías y funcionalidades. Además de aprender mucho haciéndolo, me permitió reencontrarme felizmente con la programación. =)"
        stack={["HTML", "Bootstrap", "Angular", "MySQL", "Java / Spring Boot"]}
      />
    </>
  );
}