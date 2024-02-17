/* cSpell:enable */
import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot2 from "@public/proyecto-mytv/mytv1.png";
import screenshot1 from "@public/proyecto-mytv/mytv2.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoTV({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: `MyTvShows`,
    bajada: `MyTvShows es una aplicación que permite llevar registro de tus series favoritas y ver fácilmente cuáles tienen nuevos episodios.`,
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / Tailwind CSS</li>
        <li>Firebase</li>
        <li>Supabase Auth</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://github.com/fedeholc/MyTvShows`,
    linkWebText: ``,
    linkWebHref: ``,
    subtitulo1: `¿Para qué sirve?`,
    texto1: `La aplicación fue pensada para resolver un problema aparentemente sencillo como el de tener un registro de las series que ha visto o quiere ver, en un solo lugar, y poder saber si hay nuevos episodios sin depender del acceso a las distintas plataformas que existen hoy en día.`,
    subtitulo2: `¿Qué tiene de bueno?`,
    texto2: (
      <ul>
        <li>
          Registro de multiples cuentas de usuario utilizando Supabase Auth.
        </li>
        <li>
          Búsqueda de series en la base de datos de IMDb (Internet Movie
          Database) mediante el uso de una API, y agregarlas a la lista de
          favoritos.
        </li>
        <li>
          Listado de series favoritas con la correspondiente información
          respecto a la cantidad de temporadas y a la fecha de emisión del
          último episodio.
        </li>
        <li>
          Opción de ordenar el listado de series alfebéticamente o por la fecha
          del último episodio para así poder ver cuáles son los que han sido
          emitidos recientemente.
        </li>
        <li>
          Funcionalidades para implementar a futuro: poder indicar en cuál es el
          último episodio que se ha visto de cada serie, junto con una extensión
          del navegador que nos alerte cuando haya nuevos episodios para ver.
        </li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          Era la primera vez que utilizaba React y quería poner en práctica
          cuestiones básicas como el uso de componentes, renderizado
          condicional, manejo de estados y props, etc.
        </li>
        <li>
          Un desafío nuevo fue el combinar distintas funciones asíncronas para
          que trabajen en conjunto, ya que primero debía leer los datos de
          Firebase, a continuación obtener cierta información de las series
          desde la API de OpenIMDb, para a luego realizar una nueva solicitud a
          otro endpoint, y así obtener los datos sobre los episodios de cada
          serie. Pude resolverlo mediante la utilización de async/await. Pero me
          queda pendiente profundizar en como abordar los errores cuando algo
          falla en una de las funciones asíncronas.
        </li>
        <li>
          También tuve algunos dolores de cabeza con el uso de UseEffect en
          relación a la carga de los datos, pero la nueva documentación de React
          es muy clara en cuanto a cómo usarlo y sobre todo cuando no usarlo,
          así que pude resolverlo.
        </li>
        <li>
          Programar desde cero un sistema de autenticación de usuarios era algo
          que excedía este proyecto, por lo que decidí utilizar Supabase Auth,
          lo cual me permitió implementarlo de manera sencilla.
        </li>
        <li>
          Aproveché para probar por primera vez Tailwind CSS, del cual rescato
          la idea de trabajar con utility clases.
        </li>
      </ul>
    ),
  };

  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header}>
        {dictionary.proyectos.proyecto[lang]}
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <div className={`${proyectos.proyecto__container} `}>
        <p>{TEXTO.bajada}</p>
        <div className={proyectos.columns2stack}>
          <div>
            <h3>stack</h3>
            {TEXTO.stack}
          </div>
          <div>
            <h3>{dictionary.proyectos.codigo[lang]}</h3>
            <div className={proyectos.link_icon}>
              <Link target="_blank" href={TEXTO.linkCodeHref}>
                {TEXTO.linkCodeText}&nbsp;
              </Link>
              <Image src={externalLinkIcon} alt="external link icon" />
            </div>
            {/* <h3>web</h3>
            <div className={proyectos.link_icon}>
              <Link target="_blank" href={TEXTO.linkWebHref}>
                {TEXTO.linkWebText}&nbsp;
              </Link>
              <Image src={externalLinkIcon} alt="external link icon" />
            </div> */}
          </div>
        </div>
        <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo1}</h3>
        <div className={proyectos.columns1}>
          <p>{TEXTO.texto1}</p>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}`}>
              {" "}
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot1}
                alt="screenshot"
                width={700}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista de las series guardadas y su información correspondiente.
              </figcaption>
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto2}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}`}>
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot2}
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista del buscador de series.
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo3}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto3}</div>
        </div>
      </div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
