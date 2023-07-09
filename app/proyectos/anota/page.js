import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-anota/anota-layout.webp";
import screenshot2 from "@public/proyecto-anota/anota-extension.webp";
import screenshot3 from "@public/proyecto-anota/anota-notas.webp";

export default function ProyectoANOTA() {
  const TEXTO = {
    titulo: `ANOTÁ! (Another Note Taking App)`,
    bajada: `¿Otra aplicación más para tomar notas? ¡Sí!  Todas las personas preocupadas por la organización de la información y la productividad necesitan tener una que se adapte a sus necesidades. Esta es la mía.`,
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / CSS</li>
        <li>Node / Express</li>
        <li>MySQL</li>
        <li>Chrome API</li>
      </ul>
    ),
    linkCodeText: {
      front: `frontend`,
      back: `backend`,
      ext: `extensión`,
    },
    linkCodeHref: {
      front: `https://github.com/fedeholc/anotes-front-react`,
      back: `https://github.com/fedeholc/anotes-back-express`,
      ext: `https://github.com/fedeholc/anota-chrome-extension`,
    },
    linkWebText: ``,
    linkWebHref: ``,
    subtitulo1: `Objetivo`,
    texto1: `He probado montones de aplicaciones para tomar notas, administrar tareas pendientes, guardar enlaces, etc. He tratado de utilizar una para cada cosa, pero era demasiado, luego una para todo, pero extrañaba algunas características de las otras. Así que decidí crear mi propia aplicación que se adapte a mis necesidades. Con la intención de que sea un proyecto a largo plazo, que pueda ir incorporando todas las características que me gustaría que tenga a medida que voy avanzando en mi aprendizaje como desarrollado.`,

    subtitulo2: `Características y funcionalidades`,
    texto2: (
      <ul>
        <li>
          - Crear, guardar y editar las notas desde la aplicación. En particular
          la edición se puede realizar desde el mismo lugar donde se muestra la
          nota, sin necesidad de abrir una ventana aparte.
        </li>
        <li>
          - Las notas se pueden visualizar en modo lista o en modo mosaico, con
          la posibilidad de cambiar mostrar solo el título de la nota o el
          título y el contenido.
        </li>
        <li>
          - Cada nota puede tener múltiples etiquetas y se pueden filtrar las
          notas por etiquetas, y/o haciendo una búsqueda de texto.
        </li>
        <li>
          - La extensión del navegador permite guardar en una nota el enlace
          individual de la página que se está visitando, o guardar todas las
          pestañas abiertas en una sesión.
        </li>
        <li>a futuro?:</li>
      </ul>
    ),
    subtitulo3: "Problemas y aprendizajes",
    texto3: (
      <ul>
        <li>
          - Un cuestión que me presentó un problema fue el querer mostrar un
          indicador de que la nota tenía más texto del que se veía en pantalla
          sin tener que mostrar las scroll bars. Hasta entonces no había
          utilizado React para acceder directamente al DOM mediante useRef, pero
          aquí tuve que hacerlo para comparar entre el `scrollHeight` y
          `clientHeight` del contenedor de la nota y así detectar que había un
          overflow y poder mostrar el indicador cuando correspondiera.
        </li>
        <li>
          Entre otras de las dificultades con las que me encontré, una fue la
          implementación de un sistema de masonry para poder mostrar las notas
          en modo mosaico, ya que aún no se puede hacer eso de forma nativa en
          CSS. Otra fue la implementación de un editor de texto para poder crear
          y modificar las notas, ya que el elemento `contenteditable` de HTML no
          es muy amigable. Con la intención de poner en funcionamiento la
          aplicación, terminé utilizando librerías para resolver esos problemas,
          pero me gustaría poder estudiar esas cuestiones para poder implementar
          mis propias soluciones ya que hacen a aspectos importantes del
          proyecto.
        </li>
        <li>
          Siendo esta la aplicación más grande que he realizado hasta ahora, se
          me hizo aún más evidente la importancia de dedicarle tiempo a tener un
          código legible, estructurado, documentado, etc., así como también de
          tener componentes reutilizables y organizados. Es algo en lo que tengo
          que seguir trabajando y mejorando.
        </li>
      </ul>
    ),
    subtitulo4: "Sobre el stack",
    texto4: (
      <ul>
        <li>
          Elegí React porque me pareció una buena oportunidad para dar un paso
          más en el aprendizaje del mismo y poner en práctica el uso de algunos
          hooks como useContext y useReducer para manejar los estados de la
          aplicación, así como también el uso de useRef para acceder al DOM. `,
        </li>
        <li>
          {" "}
          Para el backend utilicé Node y Express para crear una API REST que se
          conecta a una base de datos MySQL alojada en PlanetScale. La elección
          de Node y Express se debió a la facilidad con la que se puede crear
          una API, junto con el interés por aprender más sobre las posibilidades
          de desarrollo en el back end. Mismo la decisión de implementar la base
          de datos en MySQL sin utilizar un ORM respondió a la intención de
          conocer más sobre el funcionamiento de las bases de datos
          relacionales.
        </li>
        <li>
          Por su parte el desarrollo de la API me permitió poder crear una
          extensión para el navegador que se conecta a la misma.
        </li>
        <li>
          En cuanto a CSS quería aprovechar para probar el uso de módulos CSS
          por componentes, junto con la metodología BEM, que es la opción que
          encuentro más eficaz para poder tener un código CSS claro y
          mantenible, separado de la lógica de la aplicación.
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
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref.front}
              >
                {TEXTO.linkCodeText.front}
              </Link>
              &nbsp;/&nbsp;
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref.back}
              >
                {TEXTO.linkCodeText.back}
              </Link>
              &nbsp;/&nbsp;
              <Link
                className={proyectos.underline}
                target="_blank"
                href={TEXTO.linkCodeHref.ext}
              >
                {TEXTO.linkCodeText.ext}
              </Link>
              &nbsp;
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
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot1}
                alt="screenshot"
                quality={100}
                width={700}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Muestra de las distintas posibilidades de visualización de las
                notas.
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
                className={`${proyectos.screenshot} `}
                src={screenshot2}
                alt="screenshot"
                quality={100}
                width={700}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Funcionamiento de la extensión para ell navegador.
              </figcaption>
            </figure>
          </div>
        </div>
        {/* ***************************************** */}
        <br /> <br />
        <h3>{TEXTO.subtitulo4}</h3>
        <div className={proyectos.columns1}>
          <div>{TEXTO.texto4}</div>
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot} `}
                src={screenshot3}
                alt="screenshot"
                quality={100}
                width={700}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Muestra de la creación de notas y filtrado por etiquetas.
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
