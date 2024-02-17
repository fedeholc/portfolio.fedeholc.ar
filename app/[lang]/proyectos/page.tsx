import proyectos from "./proyectos.module.css";
import "@app/globals.css";
import Image from "next/image";

import { CardsProyectos } from "@app/[lang]/components/cardProyecto";
import herb from "@public/herb.png";

import ProyectoANOTA from "./anota/page2";
import ProyectoAP from "./ap/page";
import ProyectoInsta from "./insta/page";
import ProyectoNSP from "./nsp/page";
import ProyectoTV from "./tv/page";
import ff from "@app/[lang]/ff";
import GoToTop from "@app/[lang]/components/goToTop";
import { type Locale } from "@app/i18n-config";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default function Proyectos({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return ff.proyectosTodosJuntos ? (
    <ProyectosTodos lang={lang} />
  ) : (
    <ProyectosConLinks lang={lang} />
  );
}

function ProyectosConLinks({ lang }: { lang: Locale }) {
  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header}>PROYECTOS</div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={proyectos.cards__container}>
        <CardsProyectos lang={lang} />
      </div>
    </div>
  );
}

function ProyectosTodos({ lang }: { lang: Locale }) {
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
          <CardsProyectos lang={lang} />
        </div>

        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
      </div>
      <div id="proyectoNSP">
        <ProyectoNSP />
      </div>
      <div id="proyectoANOTA">
        <ProyectoANOTA params={{ lang: lang }} />
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
