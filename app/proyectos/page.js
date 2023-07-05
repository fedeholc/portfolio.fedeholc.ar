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

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼
 */
export default function Proyectos() {
  return (
    <div className={proyectos.w1000px}>
      <div className={proyectos.header}>PROYECTOS</div>
      <br />
      <ProyectoNSP></ProyectoNSP>
      {/* 
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoInsta></ProyectoInsta>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoANOTA></ProyectoANOTA>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoTV></ProyectoTV>
      <div className={proyectos.divider}>🌿</div>
      <br />
      <div className={proyectos.header}>PROYECTO</div>
      <br />
      <ProyectoAP></ProyectoAP> */}
    </div>
  );
}

 