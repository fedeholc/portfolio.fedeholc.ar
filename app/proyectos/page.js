import proyectos from "./proyectos.module.css";
import "../globals.css";
import Image from "next/image";

import CardProyecto from "@app/components/cardProyecto";
import herb from "@public/herb.png";

import ProyectoANOTA from "./anota/page";
import ProyectoAP from "./ap/page";
import ProyectoInsta from "./insta/page";
import ProyectoNSP from "./nsp/page";
import ProyectoTV from "./tv/page";
import ff from "@app/ff";
import GoToTop from "@app/components/goToTop";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default function Proyectos() {
  return ff.proyectosTodosJuntos ? <ProyectosTodos /> : <ProyectosConLinks />;
}

function ProyectosConLinks() {
  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header}>PROYECTOS</div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={proyectos.cards__container}>
        <CardProyecto
          buttonLink="/proyectos/anota"
          titulo="📝 ¡ANOTÁ! "
          subtitulo="¿Another note taking app?"
          descripcion="Si te preocupa la organización de la información y la productividad tenés que tener una app que se adapte a sus necesidades. Como no encontré una así, intenté crearla."
        />

        <CardProyecto
          titulo="<NuncaSupeProgramar/>"
          buttonLink="/proyectos/nsp"
          subtitulo="Blog de apuntes para aprender desarrollo web 👾"
          descripcion="El blog sigue siendo una de las mejores herramientas para aprender, organizar apuntes, y compartir el conocimiento. Sencillo, rápido, y accesible."
        />
        <CardProyecto
          titulo="Full size images for IG 📷"
          buttonLink="/proyectos/insta"
          subtitulo=""
          descripcion="Extensión para el navegador Chrome que permite ver imágenes de Instagram a máxima resolución y en pantalla completa, sin distracciones."
        />
        <CardProyecto
          titulo="MyTvShows 📺"
          buttonLink="/proyectos/tv"
          subtitulo=""
          descripcion="Una aplicación que te permite llevar registro de tus series favoritas y ver fácilmente cuáles tienen nuevos episodios."
        />
        <CardProyecto
          titulo="👨‍💻 Argentina Programa "
          buttonLink="/proyectos/ap"
          subtitulo="Trabajo final del curso de desarrollo web full stack"
          descripcion="Es un sitio web a modo de C.V. online que integra distintas tecnologías y funcionalidades. Además de aprender mucho haciéndolo, me permitió reencontrarme felizmente con la programación. =)"
        />
      </div>
    </div>
  );
}

function ProyectosTodos() {
  return (
    <>
      <a id="inicio"></a>
      <GoToTop />
      <div className={proyectos.proyecto}>
        <div className={proyectos.header}>PROYECTOS</div>

        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>

        <div className={proyectos.cards__container}>
          <CardProyecto
            buttonLink="/proyectos/#proyectoANOTA"
            titulo="📝 ¡ANOTÁ! "
            subtitulo="¿Another note taking app?"
            descripcion="Si te preocupa la organización de la información y la productividad tenés que tener una app que se adapte a sus necesidades. Como no encontré una así, intenté crearla."
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
            stack={[
              "HTML",
              "Tailwind CSS",
              "React",
              "Firebase",
              "Supabase Auth",
            ]}
          />
          <CardProyecto
            titulo="👨‍💻 Argentina Programa "
            buttonLink="/proyectos/#proyectoAP"
            subtitulo="Trabajo final del curso de desarrollo web full stack"
            descripcion="Es un sitio web a modo de C.V. online que integra distintas tecnologías y funcionalidades. Además de aprender mucho haciéndolo, me permitió reencontrarme felizmente con la programación. =)"
            stack={[
              "HTML",
              "Bootstrap",
              "Angular",
              "MySQL",
              "Java / Spring Boot",
            ]}
          />
        </div>

        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
      </div>

      <div id="proyectoANOTA">
        <ProyectoANOTA />
      </div>
      <div id="proyectoNSP">
        <ProyectoNSP />
      </div>
      <div id="proyectoInsta">
        <ProyectoInsta />
      </div>
      <div id="proyectoTV">
        <ProyectoTV />
      </div>
      <div id="proyectoAP">
        <ProyectoAP />
      </div>
    </>
  );
}
