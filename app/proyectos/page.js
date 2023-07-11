import proyectos from "./proyectos.module.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "../../public/external-link.png";
import screenshot1 from "../../public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png";

import ProyectoNSP from "./nsp/page.js";
import ProyectoInsta from "./insta/page";
import ProyectoAP from "./ap/page";
import ProyectoTV from "./tv/page";
import ProyectoANOTA from "./anota/page";

import CardProyecto from "@app/components/cardProyecto";

import imagen1 from "@public/proyecto-nsp/nsp2.png";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default function Proyectos() {
  return (
    <div className={proyectos.w1000px}>
      <div className={proyectos.header}>PROYECTOS</div>
      <br/>
      <div className={proyectos.cards__container}>
        <CardProyecto
          Reverse={false}
          imagen={imagen1}
          titulo="ANOTÁ! (Another Note Taking App)"
          descripcion="¿Otra aplicación más para tomar notas? ¡Sí! Toda persona preocupada por la organización de la información y la productividad necesita tener una app que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla."
        />
        <CardProyecto
          Reverse={false}
          imagen={imagen1}
          titulo="<NuncaSupeProgramar/>"
          descripcion="¿Otra aplicación más para tomar notas? ¡Sí! Toda persona preocupada por la organización de la información y la productividad necesita tener una app que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla."
        />
        <CardProyecto
          Reverse={true}
          imagen={imagen1}
          titulo="Full Size Images for IG"
          descripcion="¿Otra aplicación más para tomar notas? ¡Sí! Toda persona preocupada por la organización de la información y la productividad necesita tener una app que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla."
        />

        <CardProyecto
          Reverse={true}
          imagen={imagen1}
          titulo="MyTvShows"
          descripcion="¿Otra aplicación más para tomar notas? ¡Sí! Toda persona preocupada por la organización de la información y la productividad necesita tener una app que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla."
        />

        <CardProyecto
          Reverse={false}
          imagen={imagen1}
          titulo="Argentina Programa"
          descripcion="¿Otra aplicación más para tomar notas? ¡Sí! Toda persona preocupada por la organización de la información y la productividad necesita tener una app que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla."
        />
      </div>
      <br /> <br />
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoANOTA></ProyectoANOTA>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoNSP></ProyectoNSP>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoInsta></ProyectoInsta>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoTV></ProyectoTV>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoAP></ProyectoAP>
      <div className={proyectos.divider}>🌿</div>
      <br />
    </div>
  );
}
