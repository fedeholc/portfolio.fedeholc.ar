import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";

import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-nsp/nsp2.png";
import screenshot2 from "@public/proyecto-nsp/nsp4.png";
import herb from "@public/herb.png";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoNSP({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary();
  const TEXTO = {
    titulo: `<NuncaSupe\u00ADProgramar/> Blog de apuntes para aprender desarrollo web`,
    bajada: `Blog de aprendizaje en público, para organizar mis apuntes y compartir el conocimiento.`,
    stack: (
      <ul>
        <li>Next.js / React / JavaScript</li>
        <li>HTML / CSS </li>
        <li>Markdown</li>
        <li>Git / GitHub</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://www.github.com/fedeholc/NuncaSupeProgramar`,
    linkWebText: `nsp.fedeholc.ar`,
    linkWebHref: `https://nsp.fedeholc.ar/`,
    subtitulo1: `¿Para qué un blog?`,
    texto1: `Algo que aprendí como docente es que junto con la práctica, intentar enseñar o explicar algo (y si es por escrito mejor) es un excelente camino para aprenderlo. También es importante el aprendizaje colectivo que se genera con el intercambio. De allí la creación de un blog, que es una excelente tecnología para la difusión del conocimiento: a diferencia de lo que circula por plataformas cerradas, sus contenidos puede ser indexados por los buscadores, compartidos en redes sociales, y estar a disposición de quienes lo necesiten.`,
    subtitulo2: `¿Qué tiene de bueno?`,
    texto2: (
      <ul>
        <li>
          Mediante Next.js el blog se genera como sitio estático del lado del
          servidor, lo cual hace que sea veloz, y fácil de indexar por los
          buscadores. También es sencillo de publicar, ya que al estar alojado
          en Vercel, el deploy se realiza automáticamente cada vez que se
          actualiza el repositorio en GitHub.
        </li>
        <li>
          Añadir nuevas entradas al blog es simple: se escribe el contenido del
          post en un archivo con formato Markdown, se lo sube a una carpeta
          dentro del repositorio del proyecto, y automáticamente queda publicado
          (salvo que se lo marque como borrador).
        </li>
        <li>
          Se pueden marcar posteos como destacados para que aparezcan en una
          sección destacada de la página principal.
        </li>
        <li>
          Utilizando el formato Markdown junto con la librería remark.js se le
          puede dar formato resaltado a los bloques de código de las
          publicaciones.
        </li>
        <li>
          Se pueden filtrar los posts por etiquetas utilizando el buscador o el
          listado de las mismas.
        </li>
        <li>
          Es responsive y se adapta para que pueda ser leído desde cualquier
          dispositivo.
        </li>
        <li>
          Algunas ideas de nuevas funcionalidades las pruebo en{" "}
          <Link href="https://btcd.fedeholc.ar" target="_blank">
            {" "}
            este otro blog
          </Link>{" "}
          (ver repo{" "}
          <Link
            href="https://github.com/fedeholc/btcd.fedeholc.ar"
            target="_blank"
          >
            aquí
          </Link>
          ), de estructura similar pero en TypeScript. Allí, por ejemplo,
          implementé un sistema de comentarios para los posts, utilizando
          Supabase tanto para la autenticación/autorización de usuarios, como
          para la base de datos.
        </li>
      </ul>
    ),
    subtitulo3: "Aprendizajes y problemas en el camino",
    texto3: (
      <ul>
        <li>
          Hasta aquí solo había programando SPAs con renderizado del lado del
          cliente, por lo que me llevo un tiempo comprender las variantes que
          hay para hacerlo del lado del servidor (o de manera combinada), y cómo
          trabajar de ese modo con Next, integrando frontend y backend en una
          sola aplicación full stack.
        </li>
        <li>
          Al poco tiempo de publicado el blog, Next lanzó una nueva versión
          incorporando React Server Components, y cometí el error de ir tras la
          novedad, ya que no funcionaban las librerías para el estilizado del
          Markdown en la nueva versión. Tuve que regresar a la anterior, pero
          con la lección aprendida sobre la importancia de utilizar tecnologías
          probadas y consolidadas. <em>Actualización diciembre de 2023:</em>{" "}
          finalmente pude resolver el problema de las dependencias y actualizar
          a la última versión de Next.
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
    <div className={`${proyectos.proyecto}`}>
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
            <figure className={`${proyectos.screenshot__figure} `}>
              <Image
                className={`${proyectos.screenshot}`}
                src={screenshot1}
                alt="screenshot"
                width={700}
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
              className={`${proyectos.screenshot__figure} ${proyectos.figure_mt}`}
            >
              <Image
                className={`${proyectos.screenshot} ${proyectos.w100px}`}
                src={screenshot2}
                alt="screenshot"
                width={330}
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
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
