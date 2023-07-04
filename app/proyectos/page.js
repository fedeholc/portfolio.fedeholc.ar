import proyectos from "./proyectos.module.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "../../public/external-link.png";
import screenshot1 from "../../public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png";

import ProyectoNSP from "./nsp/page.js";

export default function Proyectos() {
  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header}>PROYECTOS</div>
      <br />
   
   
      <ProyectoNSP></ProyectoNSP>

      <ProyectoNSP></ProyectoNSP>
    </div>
  );
}

 