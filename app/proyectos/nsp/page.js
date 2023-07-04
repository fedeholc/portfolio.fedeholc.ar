import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/Screenshot from 2023-06-26 20-42-07.png";

export default function NSP() {
  const TEXTO = {
    titulo: `<NuncaSupeProgramar/> Blog de apuntes para aprender desarrollo web`,
    bajada: `Blog de aprendizaje en público, para organizar mis apuntes y ayudar a otras personas compartiendo el conocimiento.`,
    stack: (
      <ul>
        <li>Next.js / React / JavaScript</li>
        <li>HTML / CSS </li>
        <li>MarkDown</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://www.github.com/fedeholc/NuncaSupeProgramar`,
    linkWebText: `nsp.fedeholc.ar`,
    linkWebHref: `https://nsp.fedeholc.ar/`,
    subtitulo1: `Objetivo`,
    texto1: `Si hay algo que aprendí como docente es que -junto con la práctica-, intentar enseñar o explicar algo (y si es por escrito mejor) es un excelente camino para aprenderlo. También es importante el intercambio, que genera un aprendizaje colectivo. Por ello decidí crear un blog, que es una gran tecnología para la difusión de conocimiento: a diferencia de los contenidos que circulan por plataformas cerradas, sus contenidos puede ser indexados por los buscadores, compartidos en redes sociales, y estar a disposición de quienes lo necesiten.`,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
          Gracias a NextJS el blog se genera como sitio estático del lado del
          servidor lo cual hace que sea veloz, y muy fácil de indexar por los
          buscadores. También es muy sencillo de publicar, ya que al alojar el
          blog en Vercel, el deploy se realiza automáticamente cada vez que se
          actualiza el repositorio en Github.
        </li>
        <li>
          Es muy fácil publicar: se guardar el contenido del post en un archivo
          con formato MarkDown, se lo sube a una carpeta dentro del repositorio
          de proyecto, y automáticamente se realiza el deploy a Vercel.
        </li>
        <li>
          Utilizando el formato MarkDown junto con la librería remark.js se le
          puede dar formato resaltado a los bloques de código que haya en cada
          publicación.
        </li>
        <li>
          Es responsive y se adapta para que pueda ser leído desde cualquier
          dispositivo.
        </li>
        <li>
          Funcionalidades para implementar a futuro: realización de búsquedas,
          filtrado por etiquetas, comentarios en las publicaciones, etc.
        </li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          Dado que solo había programando SPAs con renderizado del lado del
          cliente, me requirió un tiempo comprender las variantes que hay para
          hacerlo del lado del servidor (o de manera combinada), y cómo trabajar
          de ese forma con NextJS para integrar frontend y backend en una sola
          aplicación full stack.
        </li>
        <li>
          Justo al poco tiempo de haber publicado el blog, Next lanzó una nueva
          versión incorporando un nuevo router y utilizando React Server
          Components, y cometí el error de ir tras la novedad y actualizar a la
          nueva versión, porque no logré hacer que funcionaran las librerías
          para el estilizado del MarkDown. Por lo que tuve que volver a la
          versión anterior, pero con la lección aprendida de que en la mayoría
          de los casos hay que utilizar tecnologías establecidas y probadas.
        </li>
        <li>
          Publicar el blog en un dominio propio me llevó también a aprender como
          registrarlo, cómo manejar los DNS, y las configuraciones necesarias
          para que pueda ser indexado por los buscadores.
        </li>
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
