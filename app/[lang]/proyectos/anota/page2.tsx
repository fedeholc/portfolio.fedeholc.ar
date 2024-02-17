import proyectos from "../proyectos.module.css";

import "@app/globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "@public/external-link.png";

import herb from "@public/herb.png";
import screenshot1 from "@public/proyecto-anota/anota_inicio.webp";
import screenshot2 from "@public/proyecto-anota/anota_highlighter.webp";
import screenshot3 from "@public/proyecto-anota/anota_etiquetas.webp";
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function ProyectoANOTA({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();

  const TEXTO = {
    titulo: dictionary.proyectos.anota01[lang],
    bajada: dictionary.proyectos.anota02[lang],
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
    subtitulo2: dictionary.proyectos.anota03[lang],
    texto2: (
      <ul>
        <li>{dictionary.proyectos.anota04[lang]}</li>
        <li>{dictionary.proyectos.anota05[lang]}</li>
        <li>{dictionary.proyectos.anota06[lang]}</li>
        <li>{dictionary.proyectos.anota07[lang]}</li>
      </ul>
    ),
    subtitulo3: "Aprendizajes y problemas en el camino",
    texto3: (
      <ul>
        <li>{dictionary.proyectos.anota08[lang]}</li>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot1.src}
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
              {/*   <Image
                className={`${proyectos.screenshot} `}
                src={screenshot2}
                alt="screenshot"
                quality={95}
                width={1024}
              /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot2.src}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={proyectos.screenshot}
                alt="screenshot"
                src={screenshot3.src}
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
