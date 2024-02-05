import proyectos from "../proyectos.module.css";
import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";
import screenshot1 from "@public/proyecto-anota/anota_inicio.webp";
import screenshot2 from "@public/proyecto-anota/anotahighlighter.webp";
import screenshot3 from "@public/proyecto-anota/anota_etiquetas.webp";
import herb from "@public/herb.png";

export default function ProyectoANOTA() {
  const TEXTO = {
    titulo: `ANOTÁ! (Another Note Taking App) & Highlighter`,
    bajada: `Otra aplicación más para tomar notas. Pero con algunas características que ya las quisiera tener en Google Keep. Y lo mejor:  incorpora una extensión para el navegador (highlighter) que permite resaltar y guardar textos y enlaces desde cualquier web.`,
    stack: (
      <ul>
        <li>React / JavaScript</li>
        <li>HTML / CSS</li>
        <li>Node.js / Express</li>
        <li>MySQL</li>
        <li>WebExtension API</li>
        <li>JSDoc</li>
      </ul>
    ),
    linkCodeText: {
      front: `frontend`,
      back: `backend`,
      ext: `highlighter`,
    },
    linkCodeHref: {
      front: `https://github.com/fedeholc/anota-front-react`,
      back: `https://github.com/fedeholc/anota-back-express`,
      ext: `https://github.com/fedeholc/anota-highlighter`,
    },
    linkWebText: ``,
    linkWebHref: ``,
    subtitulo1: ``,
    texto1: ``,
    subtitulo2: `¿Qué tiene de bueno?`,
    texto2: (
      <ul>
        <li>
          Permite crear, guardar y editar las notas desde la aplicación. La
          edición se puede realizar desde donde se ve la nota, sin tener que
          abrir otra una ventana.
        </li>
        <li>
          Las notas se pueden visualizar en modo lista o en modo mosaico, con la
          posibilidad de mostrar el título y el contenido, o solo el título,
          para así tener más en notas pantalla.
        </li>
        <li>
          Cada nota puede tener múltiples etiquetas, que pueden utilizarse como
          filtros para ver solo algunas de ellas. También se pueden buscar las
          notas por texto en su título o contenido.
        </li>
        <li>
          La extensión para el navegador (Highlighter) permite que simplemente
          al realizar una selección de texto en cualquier web, el texto se
          resalte y se guarde. Luego todos los fragmentos de texto seleccionados
          de una misma URL se pueden enviar a ANOTA y/o ser descargados en un
          archivo de texto. También se pueden generar notas guardando el enlace
          de la web, o toda la sesion de enlaces abiertos en el navegador.
        </li>
      </ul>
    ),
    subtitulo3: "Aprendizajes y problemas en el camino",
    texto3: (
      <ul>
        <li>
          Mostrar un indicador en las notas que tenían más texto del que se veía
          en pantalla (sin mostrar las scroll bars), resulto ser un problema,
          dado que hasta entonces no había utilizado React para acceder
          directamente al DOM mediante useRef. Aquí tuve que hacerlo, ya que la
          solución que se me ocurrió fue comparar si había diferencia entre el
          `scrollHeight` y el `clientHeight` del contenedor de la nota y así
          detectar si había un overflow del texto, y poder mostrar el indicador
          cuando correspondiera.
        </li>
        <li>
          Otras dificultades fueron la creación de un layout para mostrar las
          notas en modo mosaico, lo cual aún no se puede realizar de forma
          nativa en CSS. Así como también la implementación de un editor de
          texto para crear y modificar las notas, dado que el elemento HTML
          `contenteditable` no es muy versátil. En ambos casos, con la intención
          de poner rápidamente en funcionamiento la aplicación, opté por usar
          librerías, pero me quisiera poder estudiar en profundidad esos
          problemas para poder implementar mis propias soluciones ya que son
          aspectos importantes del proyecto.
        </li>
        <li>
          En cuanto a la extensión del navegador, no fue nada fácil, dado que
          recientemente se cambió al manifest V3 (lo cual conlleva numerosas
          modificaciones en las APIs), y no abundan los materiales y ejemplos de
          código actualizados. Pero valió la pena el esfuerzo porque trabajar en
          una aplicación que tiene que manejar directamente el DOM me obligó a
          reforzar los fundamentos de JavaScript. Incluso me llevo a estudiar
          sobre estructuras de datos para poder resolver un problema que era
          recorrer el arbol del DOM desde el nodo de inicio de la selección de
          texto hasta el nodo final, para poder obtener el texto, resaltarlo,
          etc.
        </li>
        <li>
          Siendo esta la aplicación más grande que he realizado hasta ahora, me
          resultó aún más evidente la importancia de dedicarle tiempo a tener un
          código legible, estructurado, documentado, etc., así como también a
          tener componentes reutilizables y organizados. Es algo en lo que tengo
          que seguir trabajando y mejorando ya que es fundamental para poder
          mantener la aplicación e incorporarle nuevas funcionalidades.
        </li>
      </ul>
    ),
    subtitulo4: "Sobre el stack",
    texto4: (
      <ul>
        <li>
          Dado que estaba estudiando React, resultaba un oportunidad para poner
          en práctica el uso de hooks como useContext y useReducer para manejar
          el estado de la aplicación, así como también de useRef para manipular
          directamente el DOM.`,
        </li>
        <li>
          Para el backend utilicé Node y Express por lo sencillo que resulta
          crear una API REST con endpoints, y que se conecta una base de datos.
          Implementé una en MySQL sin utilizar un ORM para aprender más sobre el
          funcionamiento de las bases de datos relacionales.
        </li>
        <li>
          Utilicé CSS modules por componentes, junto con la metodología BEM, con
          la intención de tener un código CSS claro y mantenible, separado de la
          lógica de la aplicación.
        </li>
        <li>
          La extensión está en puro HTML, CSS, y JavaScript. Pero decidí
          incorporar JSDoc para aprender a utilizarlo, tener un código mejor
          documentado, y también poder tener type check a través del language
          server de typescript.
        </li>
      </ul>
    ),
  };

  return (
    <div className={`${proyectos.proyecto}`}>
      <div className={proyectos.header}>PROYECTO</div>
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
        {/*   <h3>{TEXTO.subtitulo1}</h3> */}
        <div className={proyectos.columns1}>
          {/* <p>{TEXTO.texto1}</p> */}
          <div className={proyectos.screenshot__container}>
            <figure className={`${proyectos.screenshot__figure}  `}>
              <Image
                className={`${proyectos.screenshot}  `}
                src={screenshot1}
                alt="screenshot"
                quality={100}
                width={1024}
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
                quality={90}
                width={800}
              />
              <figcaption className={proyectos.screenshot__caption}>
                Funcionamiento de la extensión para el navegador.
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
                quality={90}
                width={800}
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
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
