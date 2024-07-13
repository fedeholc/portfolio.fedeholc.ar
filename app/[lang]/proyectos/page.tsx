import proyectos from "./proyectos.module.css";
import "@app/globals.css";
import Image from "next/image";

import { CardsProyectos } from "@app/[lang]/components/cardProyecto";
import herb from "@public/herb.png";
import externalLinkIcon from "@public/external-link.png";

import ProyectoANOTA from "./anota/page";
import ProyectoAP from "./ap/page";
import ProyectoInsta from "./insta/page";
import ProyectoFotoyop2 from "./fotoyop-v/page";
import ProyectoNSP from "./nsp/page";
import ProyectoTV from "./tv/page";
import ff from "@app/[lang]/ff";
import GoToTop from "@app/[lang]/components/goToTop";
import { type Locale } from "@app/i18n-config";
import { getDictionary } from "@app/get-dictionary";
import { Metadata } from "next";
import Link from "next/link";

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

async function ProyectosConLinks({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header}>
        {dictionary.proyectos.proyectos[lang]}
      </div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={proyectos.cards__container}>
        <CardsProyectos lang={lang} />
      </div>
    </div>
  );
}

async function ProyectosTodos({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  return (
    <>
      <a id="inicio"></a>
      <GoToTop />
      <div className={proyectos.proyecto}>
        <div className={proyectos.header}>
          {dictionary.proyectos.proyectos[lang]}
        </div>
        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
        <div
          className={`${proyectos.proyecto__container} ${proyectos.cards__container} `}
        >
          {/* <div className={proyectos.cv__cards__container}></div> */}
          <CardsProyectos lang={lang} />
        </div>{" "}
        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
        {/*   <div className={proyectos.proyecto__container}>
          <h3>{dictionary.proyectos.otros[lang]}</h3>
          <div className={proyectos.columns1}>
            <div>
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
        </div>
        <div className={proyectos.divider}>
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div> */}
      </div>
      <div id="proyectoFotoyop">
        <ProyectoFotoyop2 params={{ lang: lang }} />
      </div>
      <div id="proyectoANOTA">
        <ProyectoANOTA params={{ lang: lang }} />
      </div>
      <div id="proyectoNSP">
        <ProyectoNSP params={{ lang: lang }} />
      </div>

      <div id="proyectoInsta">
        <ProyectoInsta params={{ lang: lang }} />
      </div>
      {/*      <div id="proyectoTV">
        <ProyectoTV params={{ lang: lang }} />
      </div>
      <div id="proyectoAP">
        <ProyectoAP params={{ lang: lang }} />
      </div> */}
    </>
  );
}
