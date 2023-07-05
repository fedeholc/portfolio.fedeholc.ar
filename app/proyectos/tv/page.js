import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png";

export default function ProyectoTV() {
  const TEXTO = {
    titulo: `MyTvShows`,
    bajada: `MyTvShows es una aplicación que permite llevar registro de tus series favoritas y ver facilmente cuáles tienen nuevos episodios.`,
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / Tailwind CSS</li>
        <li>Firebase</li>
        <li>Git / Github</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          La verdad es que elegí React porque estaba comenzando a aprenderlo y
          me pareció un buena oportunidad para poner en práctica cuestiones
          básicas como el uso de componentes,renderizado condicional, manejo de
          estados y props, etc. Debo confesar que no sé la causa particular pero
          me sentí muy a gusto trabajando con React al punto de decidir que
          quería profundizar más en su estudio y dejar de lado Angular que es
          con lo que había trabajado antes. También aproveche para probar por
          primera vez Tailwind como framework de CSS. Me pareció muy interesante
          utility clases. Por último, utilicé una base de datos de Firebase ya
          que era muy sencilla de implementar y no tenía grandes requerimientos
          de almacenamiento.
        </li>
      </ul>
    ),
    linkCodeText: `github/fedeholc  xxx`,
    linkCodeHref: `https://www.github.com/fedeholc`,
    linkWebText: `xxxx`,
    linkWebHref: `xxxxxxx`,
    subtitulo1: `Objetivo`,
    texto1: `La aplicación fue pensada para resolver un problema aparentemente sencillo como el de tener un registro de las series que uno ve en un solo lugar y poder ver si hay nuevos episodios sin depender de tener acceso a las distintas plataformas que existen hoy en día.`,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
          La aplicación permite buscar series en la base de datos de IMDB
          mediante el uso de una API, y agregarlas a la lista de favoritos. Se
          puede ver un listado de esas series con la información de la cantidad
          de temporadas y la fecha de emisión del último episodio. Es posible
          ordenar la lista por la fecha de último episodio justamente para ver
          cuáles son los que han salido más recientemente. > Ideas para
          implementar a futuro: - Sin dudas la aplicación es muy básica y podría
          agregarse gran cantidad de funcionalidades. Pero en particular, ahora
          que sé como desarrollar extensiones para el navegador, creo que sería
          muy util hacer una que nos muestre una alerta cuando haya nuevos
          episodios de nuestras series favoritas. - Para eso seria necesario
          también que la aplicación le permita al usuario indicar cuál es el
          último capitulo de la serie que ha visto.
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          El principal desafio fue combinar distintas funciones asincrónicas
          para que funcionaran en conjunto, ya que primero debía leer los datos
          de Firebase, luego obtener cierta información de las series desde la
          API de OpenIMDB, y luego con esa información realizar una nueva
          consulta a otro endpoint de la misma API para obtener la información
          de los episodios de cada serie. Afortunadamente pude resolverlo
          correctamente con la utilización de async/await. Aunque me queda
          pendiente profundizar en como abordar los errores cuando algo falla en
          una de las funciones asincrónicas. También tuve algunos dolores de
          cabeza con el UseEffect en relación a la carga de los datos, pero la
          nueva documentación de React es muy clara en cuanto a cómo usarlo y
          sobre todo cuando no usarlo, así que pude resolverlo.
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ),
  };

  return (
    <div className={proyectos.proyecto}>
      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <p>{TEXTO.bajada}</p>
      <div className={proyectos.columns2}>
        <div>
          <h3>stack</h3>
          {TEXTO.stack}
        </div>
        <div>
          <h3>código</h3>
          <div className={proyectos.link_icon}>
            <Link target="_blank" href={TEXTO.linkCodeHref}>
              {TEXTO.linkCodeText}&nbsp;
            </Link>
            <Image src={externalLinkIcon} alt="external link icon" />
          </div>
          <h3>web</h3>
          <div className={proyectos.link_icon}>
            <Link target="_blank" href={TEXTO.linkWebHref}>
              {TEXTO.linkWebText}&nbsp;
            </Link>
            <Image src={externalLinkIcon} alt="external link icon" />
          </div>
        </div>
      </div>
      <br />
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo1}</h3>
      <div className={proyectos.columns2}>
        <div>{TEXTO.texto1}</div>

        <div>
          <Link
            target="_blank"
            href="../public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png"
          >
            <Image
              className={proyectos.screenshot}
              src={screenshot1}
              alt="screenshot"
              quality={100}
            />
          </Link>
        </div>
      </div>
      <br /> <br />
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo2}</h3>
      <div className={proyectos.columns1}>
        <div>{TEXTO.texto2}</div>
        <div className={proyectos.screenshot__container}>
          <Image
            className={proyectos.screenshot}
            src={screenshot1}
            alt="screenshot"
            quality={100}
          />
        </div>
      </div>
      {/* ***************************************** */}
      <h3>{TEXTO.subtitulo3}</h3>
      <div className={proyectos.columns1}>
        <div>{TEXTO.texto3}</div>
        <Image
          className={proyectos.screenshot}
          src={screenshot1}
          alt="screenshot"
        />
      </div>
    </div>
  );
}
