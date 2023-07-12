import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-ig/igvideo.webp";
import screenshot2 from "@public/proyecto-ig/ig1.png";

export default function ProyectoInsta() {
  const TEXTO = {
    titulo: `Full Size Images for IG`,
    bajada: `Es una extensión muy sencilla para el navegador Chrome que permite ver las fotos de Instagram a máxima resolución.`,
    stack: (
      <ul>
        <li>JavaScript</li>
        <li>HTML / CSS</li>
        <li>Chrome API</li>
        <li>Git / Github</li>
      </ul>
    ),
    linkCodeText: `github/fedeholc`,
    linkCodeHref: `https://github.com/fedeholc/full-size-insta-extension`,
    linkWebText: `chrome web store`,
    linkWebHref: `https://chrome.google.com/webstore/detail/full-size-images-for-ig/pbablejaejbcdfcnmkiofkbloglbjncm`,
    subtitulo1: `¿Para qué sirve?`,
    texto1: `Quienes disfrutamos de ver y hacer fotos, queremos poder apreciarlas a máxima resolución y en pantalla completa. La extensión busca hacer eso posible, de manera sencilla, y sin tener que recurrir a otra plataforma.`,
    subtitulo2: `¿Qué tiene de bueno?`,
    texto2: (
      <ul>
        <li>
          Al tener la extensión activada, en el angulo superior derecho de cada
          foto aparece un icono de una lupa. Al hacer click sobre el mismo, se
          abre la imagen a tamaño completo y sin otras distracciones. Luego
          haciendo click en cualquier lugar de la pantalla se regresa a la
          página y posición original.
        </li>
        <li>
          Algunas ideas para implementar a futuro: que se pueda elegir si se
          abre la imagen en una nueva pestaña o en la misma, y si se utiliza o
          no el modo de pantalla completa del navegador; que se pueda generar
          una galería de imágenes para ver una tras otra a pantalla completa.
        </li>
      </ul>
    ),
    subtitulo3: "Problemas en el camino, y aprendizajes",
    texto3: (
      <ul>
        <li>
          {" "}
          La principal dificultad técnica con la que me encontré es que al ser
          Instagram de una web dinámica, a medida que aparecen nuevos elementos,
          es necesario ir agregando listeners e iconos. Pero no encontré un
          evento que se dispare cuando eso ocurre. La solución que implementé es
          hacerlo con el evento mouseMove, lo cuál es efectivo pero poco
          eficiente ya que implica leer toda la estructura de la web muchas más
          veces de las necesarias. Tengo pendiente buscar una solución más
          eficiente para este problema. (Si sabés cómo hacerlo ¡por favor
          escribime!)
        </li>
        <li>
          {" "}
          Otra cuestión que aún debo investigar es como portar la extensión a
          Firefox, Safari y Edge, de modo tal de no excluir a quiénes utilizan
          algún otro de los principales navegadores.
        </li>
        <li>
          {" "}
          También surgió un problema no técnico que no había tenido en cuenta:
          luego de varias semanas de publicada la extensión, cuando ya tenía más
          de cien usuarios, me llegó un aviso de que la eliminaban de la chrome
          web store de Estados Unidos por utilizar la palabra "Instagram" en el
          nombre y porque el icono incluía los colores de la marca. Por lo que
          tuve que cambiar nombre y logo, y volver a publicarla.
        </li>
        <li>
          Hacer extensión para el navegador me resulto un buena forma de para
          practicar HTML, CSS y JavaScript sin frameworks de por medio, aprender
          sobre la manipulación del DOM y ver cómo lo estructuran este tipo de
          aplicaciones. Pienso ahora que sería interesante programar una alerta
          que me avise cuando se produzcan modificaciones en el DOM del sitio
          que hagan que la extensión deje de funcionar.
        </li>
        <li>
          Lamentablemente no hay tantos contenidos en la web para aprender a
          desarrollar extensiones por lo que valoro mucho la elaboración de una
          buena documentación con explicaciones claras y ejemplos de código como
          la que tiene Chrome de su API.
        </li>
        <li>
          Es muy motivador poder crear algo últil, que funciona, y que se puede
          compartir con otras personas. Este proyecto me ha dado ganas e ideas
          para hacer montones de extensiones.
        </li>
      </ul>
    ),
  };

  return (
    <div className={`${proyectos.proyecto}`}>
      <div className={proyectos.header}>PROYECTO</div>
      <div className={proyectos.divider}>🌿</div>
      
      <h1 className={proyectos.titulo}>{TEXTO.titulo}</h1>
      <div className={`${proyectos.proyecto__container} `}>
        <p>{TEXTO.bajada}</p>
        <div className={proyectos.columns2stack}>
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
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot} `}
                src={screenshot1}
                alt="screenshot"
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista de la extensión funcionando.
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
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot2}
                width={700}
                alt="screenshot"
                quality={100}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Vista de la extensión en la Chrome web store.
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
      <div className={proyectos.divider}>🌿</div>
    </div>
  );
}
