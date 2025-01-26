import proyectos from "./proyectos.module.css";
import "@app/globals.css";
import Image from "next/image";

import { CardsProyectos } from "@app/[lang]/components/cardProyecto";
import herb from "@public/herb.png";
import externalLinkIcon from "@public/external-link.png";

import ProyectoANOTA from "./ProyectoANOTA";
import ProyectoAP from "./ProyectoAP";
import ProyectoInsta from "./ProyectoInsta";
import ProyectoFotoyop2 from "./ProyectoFotoyop2";
import ProyectoNSP from "./ProyectoNSP";
import ProyectoTV from "./ProyectoTV";
import ff from "@app/[lang]/ff";
import GoToTop from "@app/[lang]/components/goToTop";
import { type Locale } from "@app/i18n-config";
import { getDictionary } from "@app/get-dictionary";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ProyectoJWTLK from "./ProyectoJWTLK";
import ProyectoHealthPro from "./ProyectoHealthPro";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default async function Proyectos({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
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
      </div>

      <div id="proyectoJWTLK">
        <ProyectoJWTLK lang={lang} />
      </div>
      <div id="proyectoFotoyop">
        <ProyectoFotoyop2 lang={lang} />
      </div>
      <div id="proyectoHealthPro">
        <ProyectoHealthPro lang={lang} />
      </div>

      <div id="proyectoANOTA">
        <ProyectoANOTA lang={lang} />
      </div>
      <div id="proyectoNSP">
        <ProyectoNSP lang={lang} />
      </div>

      <div id="proyectoInsta">
        <ProyectoInsta lang={lang} />
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
