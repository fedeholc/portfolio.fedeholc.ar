import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-ig/igvideo.webp";
import screenshot2 from "@public/proyecto-ig/ig1.png";

export default function ProyectoInsta() {
  const TEXTO = {
    titulo: `instagram full size chrome extension`,
    bajada: `Es una extensión muy sencilla para el navegador Chrome que permite ver las fotos de instagram a máxima resolución.`,
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
    subtitulo1: `Objetivo`,
    texto1: `Quienes amamos ver y hacer fotos, disfrutamos de poder apreciarlas a máxima resolución y en pantalla completa. La extensión busca resolver el problema ese sin tener que recurrir a otra plataforma (¡tal vez nunca surja un nuevo flickr! ) y de una manera sencilla.

   
    `,
    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
          {" "}
          Al tener la extensión activada, en el angulo superior derecho de cada
          foto aparece de manera sutil un icono de una lupa. Al hacer click
          sobre el icono se abre la imagen a tamaño completo y sin otras
          distracciones. Luego clickeando sobre la misma se regresa a la página
          y posición original.
        </li>
        <li>
          Ideas para implementar a futuro: - Que se pueda elegir si se abre la
          imagen en una nueva pestaña o en la misma, y si se utiliza o no el
          modo de pantalla completa del navegador. - Que se pueda generar una
          galería de imágenes para ir viendo una trás otra a pantalla completa
          evitando tener que clickear una por una de las que queremos ver.
        </li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          - La principal dificultad técnica con la que me encontré es que al
          tratarse Instagram de una web dinámica, a medida que se van cargando
          nuevos elementos en el feed, es necesario ir agregando los listeners e
          iconos de lupas. Pero no encontré un evento que se dispare cuando
          aparece nuevo contenido. La solución que implementé es hacerlo con el
          evento mousemove, lo cuál es efectivo pero poco eficiente ya que
          implica leer toda la estructura de la web muchas más veces de las
          necesarias. Tengo anotado coomo tarea pendiente encontrar una solución
          más eficiente. (Si usted que está que está leyendo esto tiene la
          respuesta ¡por favor escribame!)
        </li>
        <li>
          - Otra cuestión que aún debo investigar es como portar la extensión a
          Firefox, Safari y Edge, de modo tal de no excluir a quiénes utilizan
          otros de los principales navegadores.
        </li>
        <li>
          {" "}
          - Finalmente mencionar otra dificultad no técnica que ingenuamente no
          había tenido en cuenta: luego de varias semanas de publicada la
          extensión me llegó un aviso de que la eliminaban de la chrome store
          por utilizar la palabra "Instagram" en el nombre y porque el logo
          incluía los colores de la marca.
        </li>
        <li>
          - Hacer extensiones del navegador es un buen ejercicio para practicar
          HTML, CSS y JavaScript en estado puro, y en este caso también para
          aprender sobre la manipulación del DOM y ver cómo es su estructura en
          este tipo de webs. De hecho hay que estar atento a cualquier cambio
          que pueda hacer que deje de funcionar la extensión (nota mental:
          podría programar una alerta que me avise cuando ese ocurre).
        </li>
        <li>
          - No hay tantos contenidos para aprender a desarrollar extensiones por
          lo que valoro mucho la dedicación a elaborar una buena documentación
          como la que tiene Chrome, con explicaciones y ejemplos.{" "}
        </li>
        <li>
          - Es muy motivador poder hacer con pocas líneas de código algo que
          funciona, que es útil y que se puede compartir con otras personas. Me
          ha dado ganas e ideas para hacer montones de extensiones (¿alguién me
          quiere donar tiempo?).
        </li>
      </ul>
    ),
  };

  return (
    <div className={`${proyectos.proyecto}`}>
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
    </div>
  );
}
