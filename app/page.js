//NextJS
import Image from "next/image";
import Link from "next/link";
//styles
import "./globals.css";
//icons
import githubicon from "../public/brand-github.png";
import paperclipIcon from "../public/paperclip.png";
import starIcon from "../public/star.png";
import notesIcon from "../public/notes.png";
import mailIcon from "../public/mail.png";
import instagramIcon from "../public/brand-instagram.png";
import linkedinIcon from "../public/brand-linkedin.png";
import herb from "@public/herb.png";

//components
import Fotos from "./components/fotos";

export default function Home() {
  return (
    <article className="article__container">
      <hgroup className="heading">
        <h2 className="heading__title1">
          ¡Hola!&nbsp;<span className="heading__smile">=)</span>&nbsp;
        </h2>
        <h2 className="heading__title2">¿Cómo andás?</h2>
      </hgroup>
      <div className="main-container">
        <div>
          <p>
            Mi nombre es <span className="resaltado">Federico Holc</span>,
            <strong> soy desarrollador web</strong>&nbsp;
            <span className="emoji">🧑‍💻</span>, y vivo en Buenos Aires,
            Argentina.
          </p>
          <p>
            De chico amaba jugar al <span className="emoji">👾</span> space
            invaders <span className="emoji">👾</span> en la IBM PC/XT de mi
            papá, y di mis primeros pasos en programación con Logo&nbsp;
            <span className="emoji">🐢</span>. Durante mi último año de escuela
            secundaria (técnica en computación) conseguí trabajo como
            desarrollador en Visual Basic. Luego comencé a estudiar Ciencias de
            la Computación en la universidad.
          </p>
        </div>
        <div className="foto-container">
          <Fotos></Fotos>
        </div>
      </div>
      <div>
        <p>
          Pero era el año 2001 y a la Argentina y a mi vida les esperaba un plot
          twist&nbsp;<span className="emoji">🙈</span>, o mejor dicho, un ¡epic
          fail!&nbsp;
          <span className="emoji">💩</span> Abandoné la programación.&nbsp;
          <span className="emoji">🤦🏻😭☠️</span>&nbsp;
        </p>
        <p>
          En los años que siguieron fui sociólogo&nbsp;
          <span className="emoji">🤔</span>, y profesor en escuelas secundarias
          y en la Universidad de Buenos Aires. Allí aprendí y enseñé todo lo que
          pude.&nbsp;
          <span className="emoji">👨‍🏫</span>
        </p>
        <p>
          Hace un tiempo, a partir de utilizar software fotográfico de código
          abierto (¡también estudié fotografía!&nbsp;
          <span className="emoji">📸</span>), me volvió a interesar
          profundamente la programación. Me encontré con que el desarrollo web
          era algo muy distinto al de hace 20 años&nbsp;
          <span className="emoji">🤯</span>, ¡y me atrapó!&nbsp;
          <span className="emoji">🕸️</span> Desde ese momento no paré de
          aprender ni de programar.<span className="emoji">🚀</span>
        </p>
      </div>
      <div className="content-links">
        <span>Podés ver mis&nbsp;</span>
        <span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="projects icon"
                width="13"
                height="auto"
                src={starIcon}
              ></Image>
              &nbsp;<Link href="/proyectos">Proyectos</Link>
            </div>
          </button>
          ,&nbsp;
        </span>
        <span>descargar mi&nbsp;</span>
        <span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="paper clip icon"
                width="12"
                height="auto"
                src={paperclipIcon}
              ></Image>
              &nbsp;<Link href="/cv">CV en PDF</Link>
            </div>
          </button>
          ,&nbsp;
        </span>
        <span>
          <span>leer&nbsp;</span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="blog icon"
                width="10"
                height="auto"
                src={notesIcon}
              ></Image>
              &nbsp;
              <Link target="_blank" href="https://nsp.fedeholc.ar">
                NSP Blog
              </Link>
            </div>
          </button>
          ,&nbsp;
        </span>
        <span>
          <span>encontrarme en:&nbsp;</span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="github icon"
                width="12"
                height="auto"
                src={githubicon}
              ></Image>
              &nbsp;
              <Link href="https://github.com/fedeholc" target="_blank">
                GitHub
              </Link>
            </div>
          </button>
          &nbsp;
        </span>
        <span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="linkedin icon"
                width="14"
                height="14"
                src={linkedinIcon}
              ></Image>
              &nbsp;
              <Link
                href="https://www.linkedin.com/in/federicoholc/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </button>
          &nbsp;
        </span>
        <span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="instagram icon"
                width="14"
                height="14"
                src={instagramIcon}
              ></Image>
              &nbsp;
              <Link href="https://www.instagram.com/fedeholc/" target="_blank">
                Instagram
              </Link>
            </div>
          </button>
          ,&nbsp;
        </span>
        <span>
          <span>o escribirme a:&nbsp;</span>
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="mail icon"
                width="14"
                height="auto"
                src={mailIcon}
              ></Image>
              &nbsp;
              <Link href="mailto:federicoholc@gmail.com">
                federicoholc@gmail.com
              </Link>
            </div>
          </button>
          .
        </span>
      </div>
      <br />

      <div className="centrar">
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </article>
  );
}
