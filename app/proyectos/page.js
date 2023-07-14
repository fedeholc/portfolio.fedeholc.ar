import proyectos from "./proyectos.module.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
 

import CardProyecto from "@app/components/cardProyecto";
 

import herb from "@public/herb.png";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default function Proyectos() {
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
          descripcion="Si te preocupa la organización de la información y la productividad tenés que tener una app que se adapte a sus necesidades. Como no encontré la mía, intenté hacerla."
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
       
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
     
    </div>
  );
}
