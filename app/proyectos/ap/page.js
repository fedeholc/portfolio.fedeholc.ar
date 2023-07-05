import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/nsp2.png";
import screenshot2 from "@public/proyecto-nsp/nsp4.png";

// El sitio web es una aplicación de una sola página (SPA) desarrollada con Angular, que consume una API REST desarrollada con Java, Spring Boot y Hibernate, y que se conecta a una base de datos MySQL. El sitio web está alojado en Firebase, y la API REST en Koyeb. El código fuente está en Github.

// La elección de las tecnologías no fue propia sino que fueron las que aprendimos en el curso.

export default function ProyectoAP() {
  const TEXTO = {
    titulo: `AP3 portfolio`,
    bajada: `A simple vista es un sencillo sitio web del currículum 
    vitae de un desarrollador web. Es a la vez un proyecto full stack
    que integra distintas tecnologías y funcionalidades, y tuve que
    realizar como trabajo final del curso de Argentina Programa v3.0.
    En su desarrollo aprendí mucho y me reencontré felizmente con 
    la programación. =)`,
    stack: (
      <ul>
        <li>Angular / TypeScript / JavaScript</li>
        <li>HTML / CSS / Bootstrap </li>
        <li>Java / Spring Boot / Hibernate</li>
        <li>MySQL</li>
        <li>Firebase</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc  xxx`,
    linkCodeHref: `https://www.github.com/fedeholc`,
    linkWebText: `xxxx`,
    linkWebHref: `xxxxxxx`,
    subtitulo1: `Objetivo`,
    texto1: `xxxxx`,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
          autorizacion en firebase tablas relacionadas ORM vs consultas sql
        </li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          Debo confesar que no fue sencillo componer el recompecabezas de
          tecnologías necesarías para que todo funcione, y en algunos aspectos
          las cosas quedaron "atadas con alambre" porque no tenía el tiempo
          necesario para profundizar en conocer los fundamentos de todo lo que
          estaba haciendo. ¡Pero funcionó! Y me paermitió tener una visión
          general de cómo se integra un desarrollo que incluye un front end, y
          un back end con API y base de datos. Con Angular comprendí cómo era
          trabajar con un framework para crear una SPA en particular cómo se
          estructura el código utilizando componentes y cómo se implementa el
          patron de diseño MVC.
        </li>
        <li>
          Teniendo en cuenta que es el primer proyecto que realicé, la cantidad
          de aprendizajes fue enorme y es imposible dar cuenta de todos ellos
          aquí (desde cada una de las tecnologías y su integración general hasta
          infinitos detalles para resolver problemas puntuales). Pero me
          gustaría destacar algunas cuestiones (aunuqe resulten obvias para
          quién ya tiene experiencia): El aprendizaje colaborativo entre pares
          es hermoso, contar con alguién que te guié u oriente, la gloria. Pero
          como no contaba con eso último la gloria estuvo en el conocimiento
          humano acumulado y disponible en StackOverflow, videos de youtube,
          blogs, y una tecnología que no debería morir nunca: los libros, ya que
          poseen el conocimiento estructurado de un modo que no se consigue en
          otros medios.
        </li>
        <li>
          Como estructurar, documentar y comentar el código no es algo trivial,
          ya sea que vaya a ser leído por otras personas como por mi yo del
          futuro.
        </li>
        <li>
          Más que una dificultad en el momento, significó una dificiultad a
          futuro el hecho de aprender directamente un framework como Angualar,
          con TypeScript sin antes haber aprendido JavaScript, lo cuaĺ me llevó
          a hacerlo a posteriori para poder tener un conocimiento de los
          fundamentos y poder diferenciar que características eran propias de
          cada tecnología.
        </li>
        <li>
          A decir verdad los mayores dolores de cabeza fueron provocados por el
          hecho de que desde Argentina Programa nos exigían hacer el deploy en
          un derminado lugar, y ese lugar fue cambiando varias veces (Heroku,
          Fly, Koyeb, PlanetScale) cuando faltaba poco tiempo para la entrega
          final. Pero rescato que eso me permitió conocer distintas opciones de
          deploy y aprender a hacerlo en cada una de ellas.
        </li>
        <li>
          De todas las tecnologías creo que la que menos me convenció fue
          bootstrap. Aunque reconozco que para un diseño rápido y estandarizado
          es útil, al introducir modificaciones en el diseño resultaba en un
          código desprolijo mezclando clases con archivos de CSS.
        </li>
      </ul>
    ),
  };

  return (
    <div className={`${proyectos.proyecto}`}>
      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <div className={`${proyectos.proyecto__container} `}>
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
        <div className={proyectos.columns1}>
          <p>{TEXTO.texto1}</p>
          <div className={proyectos.screenshot__container}>
            <figure>
              <Image
                className={`${proyectos.screenshot} ${proyectos.w700px}`}
                src={screenshot1}
                alt="screenshot"
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Artículo del blog con bloques de código, visto en una pantalla
                amplia.
              </figcaption>
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns2}>
          <div>{TEXTO.texto2}</div>
          <div className={proyectos.screenshot__container}>
            <figure
              className={`${proyectos.screenshot__figure} ${proyectos.w100px}`}
            >
              <Image
                className={`${proyectos.screenshot} ${proyectos.w100px}`}
                src={screenshot2}
                alt="screenshot"
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Portada del blog vista en un teléfono.
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
    </div>
  );
}
