import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-ap/ap1.png";
import screenshot2 from "@public/proyecto-ap/ap2.png";
import screenshot3 from "@public/proyecto-ap/ap5.png";
import screenshot4 from "@public/proyecto-ap/ap4.png";

// El sitio web es una aplicación de una sola página (SPA) desarrollada con Angular, que consume una API REST desarrollada con Java, Spring Boot y Hibernate, y que se conecta a una base de datos MySQL. El sitio web está alojado en Firebase, y la API REST en Koyeb. El código fuente está en Github.

// La elección de las tecnologías no fue propia sino que fueron las que aprendimos en el curso.

export default function ProyectoAP() {
  const TEXTO = {
    titulo: `Argentina Programa v3.0 - Curriculum Vitae`,
    bajada: `El sitio web es curriculum vitae online que integra distintas tecnologías y funcionalidades. Fue solicitado como trabajo final del curso de desarrollo web full stack de Argentina Programa.
    En su realización aprendí mucho, pero más importante aún, me permitió reencontrarme felizmente con la programación. =)`,
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
    linkWebText: `https://portfolioap-cccf4.web.app/`,
    linkWebHref: `https://portfolioap-cccf4.web.app/`,
    subtitulo1: `Objetivo`,
    texto1: `-`,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>Diseño responsive, adaptable a distintos tamaños de pantalla.</li>
        <li>Autorización de usuario para acceder a la modalidad de edición.</li>
        <li>
          Posibilidad de editar los elementos a mostrar en cada una de las
          secciones, tanto en lo que hace al texto como a las imágenes.
        </li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          No fue sencillo componer el rompecabezas de tecnologías necesarias
          para que todo funcione, y en algunos aspectos las cosas quedaron
          "atadas con alambre", ya que no tenía el tiempo necesario para
          profundizar en los fundamentos de cada herramienta. ¡Pero funcionó!
        </li>
        <li>
          El trabajo me permitió tener una visión general de cómo se integra un
          desarrollo que incluye un front end y un back end con API y base de
          datos.
        </li>
        <li>
          Con Angular comprendí cómo era trabajar con un framework para crear
          una SPA en particular cómo se estructura el código utilizando
          componentes y cómo se implementa un patrón de diseño MVC. El haber
          aprendido directamente Angular con TypeScript me obligo a tener que
          estudiar que a posteriori JavaScrip para poder tener un conocimiento
          de los fundamentos y poder diferenciar que características eran
          propias de cada tecnología.
        </li>
        <li>
          La exigencia de Argentina Programa de hacer el deploy en un
          determinado lugar, y que ese lugar fuera cambiando varias veces
          (Heroku, Fly, Koyeb, PlanetScale) cuando faltaba poco tiempo para la
          entrega fue un dolor de cabeza. Pero rescato que me permitió conocer
          distintas opciones y formas de hacer deploys de las aplicaciones.
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
        {/*  <h3>{TEXTO.subtitulo1}</h3> */}
        <div className={proyectos.columns1}>
          {/*           <p>{TEXTO.texto1}</p>
           */}{" "}
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure} `}>
              <Image
                className={`${proyectos.screenshot} ${proyectos.w700px}`}
                src={screenshot1}
                alt="screenshot"
                quality={100}
                width={600}
              />
            </figure>
          </div>
        </div>
        <br /> <br />
        {/* ***************************************** */}
        <h3>{TEXTO.subtitulo2}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto2}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot2}
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista de una de las secciones con los botones de edición
                activados.
              </figcaption>
            </figure>
          </div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot3}
                alt="screenshot"
                width={600}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista de la ventana de edición de la portada.
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo3}</h3>
        <div className={proyectos.columns2}>
          <div>{TEXTO.texto3}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot4}
                alt="screenshot"
                width={350}
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Portada del sitio web visto en un teléfono.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
