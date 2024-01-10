import proyectos from "./proyectos.module.css";
import "../globals.css";
import Image from "next/image";

import {CardsProyectos} from "@app/components/cardProyecto";
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
        <CardsProyectos />
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
          <CardsProyectos />
        </div>

        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
      </div>
      <div id="proyectoNSP">
        <ProyectoNSP />
      </div>
      <div id="proyectoANOTA">
        <ProyectoANOTA />
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
