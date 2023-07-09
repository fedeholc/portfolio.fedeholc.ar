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
    bajada: `¿Otra aplicación más para tomar notas? ¡Sí!  Toda persona preocupada por la organización de la información y la productividad necesita tener una que se adapte a sus necesidades. Como no encontré una así para mí, intenté hacerla.`,
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / CSS</li>
        <li>Node.js / Express</li>
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
    subtitulo1: `¿Para qué?`,
    texto1: `Probé un montón de aplicaciones para tomar notas, administrar tareas pendientes, guardar enlaces, etc. Traté de usar una para cada cosa, pero era demasiado; luego una sola para todo, pero extrañaba algo de las otras. Así que decidí crear una app que se adapte a mis necesidades, y con la intención de que sea un proyecto a largo plazo, que pueda ir incorporando características a medida que voy avanzando en mi aprendizaje como desarrollador.`,

    subtitulo2: `¿Qué tiene de bueno?`,
    texto2: (
      <ul>
        <li>
          Permite crear, guardar y editar las notas desde la aplicación. En
          particular la edición se puede realizar desde el mismo lugar donde se
          ve la nota, sin tener que abrir otra una ventana.
        </li>
        <li>
          Las notas se pueden visualizar en modo lista o en modo mosaico, con la
          posibilidad de mostrar solo el título (para ver más en pantalla) o el
          título y el contenido.
        </li>
        <li>
          Cada nota puede tener múltiples etiquetas que también se pueden
          utilizar como filtros para ver solo algunas notas. También se pueden
          buscar las notas por texto en su título o contenido.
        </li>
        <li>
          La extensión del navegador permite guardar en una nota el enlace de la
          página que se está visitando, o guardar todas las pestañas abiertas en
          una sesión.
        </li>
        <li>
          Algunas de las características que tengo planificado incorporarle a
          futuro son: posibilidad de reordenar las notas según distintos
          criterios; capacidad de darle formato al texto de la nota utilizando
          Markdown; hacer que la extensión de chrome pueda enviar fragmentos
          seleccionados de texto.
        </li>
      </ul>
    ),
    subtitulo3: "Aprendizajes y problemas en el camino",
    texto3: (
      <ul>
        <li>
          Algo al parecer simple como querer mostrar un indicador en las notas
          que tenían más texto del que se veía en pantalla (sin mostrar las
          scroll bars), resulto ser un problema. Hasta entonces no había
          utilizado React para acceder directamente al DOM mediante useRef, pero
          aquí tuve que hacerlo, ya que hasta el momento la mejor solución que
          se me ocurrió fue comparar si había diferencia entre el `scrollHeight`
          y el `clientHeight` del contenedor de la nota y así detectar si había
          un overflow del texto, y poder mostrar el indicador cuando
          correspondiera.
        </li>
        <li>
          Otras dificultades fueron la creación de un layout para mostrar las
          notas en modo mosaico, ya que aún no se puede hacer de forma nativa en
          CSS. Así como también la implementación de un editor de texto para
          crear y modificar las notas, ya que el elemento `contenteditable` de
          HTML no es muy versátil. En ambos casos, y con la intención de poner
          en funcionamiento la aplicación, opté por usar librerías para
          resolverlo rápido, pero me gustaría poder estudiar más en profundidad
          esos problemas para poder implementar mis propias soluciones ya que
          hacen a aspectos importantes del proyecto.
        </li>
        <li>
          Siendo esta la aplicación más grande que he realizado hasta ahora, se
          me hizo aún más evidente la importancia de dedicarle tiempo a tener un
          código legible, estructurado, documentado, etc., así como también de
          tener componentes reutilizables y organizados. Es algo en lo que tengo
          que seguir trabajando y mejorando ya que es fundamental para poder
          crear y mantener aplicaciones de mayor tamaño.
        </li>
      </ul>
    ),
    subtitulo4: "Sobre el stack",
    texto4: (
      <ul>
        <li>
          Como estaba estudiando React era un oportunidad para poner en práctica
          el uso de hooks como useContext y useReducer para manejar el estado de
          la aplicación, así como también de useRef para manipular directamente
          el DOM.`,
        </li>
        <li>
          Para el backend utilicé Node y Express por lo sencillo que resulta
          crear una API REST que se conecte una base de datos. Implementé una en
          MySQL sin utilizar un ORM para aprender más sobre el funcionamiento de
          las bases de datos relacionales.
        </li>
        <li>
          El desarrollo de la API me permitió poder crear una extensión para el
          navegador que se conecta a la misma.
        </li>
        <li>
          En cuanto a CSS quería probar el uso de módulos CSS por componentes,
          junto con la metodología BEM, como opción para poder tener un código
          CSS claro y mantenible, separado de la lógica de la aplicación.
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
