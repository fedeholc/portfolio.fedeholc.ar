import "./globals.css";
import { Archivo_Black, Roboto_Mono } from "next/font/google";
import { Recursive, Montserrat } from "next/font/google";
import Image from "next/image";
import Fotos from "./fotos";
import githubicon from "../public/brand-github.png";
import paperclipIcon from "../public/paperclip.png";
import starIcon from "../public/star.png";
import notesIcon from "../public/notes.png";
import mailIcon from "../public/mail.png";
import rayIcon from "../public/ray.png";

import instagramIcon from "../public/brand-instagram.png";
import linkedinIcon from "../public/brand-linkedin.png";
import Theme from "./theme";

export default function Home() {
  return (
    <div className="main__grid">
      <div className="navbar">
        <div className="navbar-icons">
          <Image
            className="imagen-icon"
            alt="github icon"
            width="40"
            height="40"
            src={githubicon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="linkedin icon"
            width="40"
            height="40"
            src={linkedinIcon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="mail icon"
            width="40"
            height="40"
            src={mailIcon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="instagram icon"
            width="40"
            height="40"
            src={instagramIcon}
          ></Image>
          <div className="separador">|</div>
          <div>CV</div>
          <div className="separador">|</div>
          <div>Proyectos</div> <div className="separador">|</div>
          <div>Blog</div>
          <div className="separador">|</div>
          <Theme></Theme>
        </div>
      </div>

      <main>
        <div className="main-area">
          <div className="flex">
            <h2>
              ¡Hola!&nbsp;<span className="smile">=)</span>&nbsp;¿Cómo andás?
            </h2>
          </div>
          <div className="main-container  ">
            <div>
              <p>
                Mi nombre es <span className="resaltado">Federico Holc</span>,
                soy desarrollador&nbsp;
                <span className="hermano">web</span>&nbsp;
                <span className="emoji">🧑‍💻</span>, y vivo en Buenos Aires,
                Argentina.
              </p>
              <p>
                De chico amaba jugar al <span className="emoji">👾</span> space
                invaders <span className="emoji">👾</span> en la XT286 de mi
                papá, y di mis primeros pasos en programación con Logo&nbsp;
                <span className="emoji">🐢</span>. Durante mi último año de
                escuela secundaria (técnica en computación) conseguí trabajo
                como desarrollador en Visual Basic. Luego comencé a estudiar
                Ciencias de la Computación en la universidad.
              </p>
            </div>
            <div className="foto-container">
              <Fotos></Fotos>
            </div>
          </div>
          <div>
            <p>
              Pero era el año 2001 y a la Argentina y a mi vida les esperaba un
              plot twist&nbsp;<span className="emoji">🙈</span>, o por qué no,
              un ¡epic fail!&nbsp;
              <span className="emoji">💩</span> Dejé la programación.&nbsp;
              <span className="emoji">🤦🏻😭☠️</span>&nbsp;
            </p>
            <p>
              En los años que siguieron fuí sociólogo&nbsp;
              <span className="emoji">🤔</span>, y profesor en escuelas
              secundarias y en la Universidad de Buenos Aires. Allí aprendí y
              enseñé todo lo que pude.&nbsp;
              <span className="emoji">👨‍🏫</span>
            </p>
            <p>
              Hace un tiempo, a partir de utilizar software fotográfico de
              código abierto (¡también estudié fotografía!&nbsp;
              <span className="emoji">📸</span>), me volvió a interesar
              profundamente la programación. Me encontré con que el desarrollo
              web era algo muy distinto al de hace 20 años&nbsp;
              <span className="emoji">🤯</span>, ¡y me atrapó!&nbsp;
              <span className="emoji">🕸️</span> Desde entonces no paré de
              aprender ni de programar (ahora con una mirada puesta en las
              necesidades de usuarios y usuarias que antes no tenía). ¿Qué mejor
              entonces que hacerlo a tiempo completo ayudando a una organización
              a alcanzar sus objetivos? Ese es mi próximo paso.&nbsp;
              <span className="emoji">🤝</span>
            </p>
          </div>
          <div className="  flex flex-wrap flex-row place-items-baseline mt-8">
            <span>Podés ver mis&nbsp;</span>
            <span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="projects icon"
                    width="13"
                    height="13"
                    src={starIcon}
                  ></Image>
                  &nbsp;Proyectos
                </div>
              </button>
              ,&nbsp;
            </span>
            <span>descargar mi&nbsp;</span>
            <span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="paper clip icon"
                    width="12"
                    height="12"
                    src={paperclipIcon}
                  ></Image>
                  &nbsp;CV en PDF
                </div>
              </button>
              ,&nbsp;
            </span>
            <span>
              <span>leer&nbsp;</span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="blog icon"
                    width="10"
                    height="10"
                    src={notesIcon}
                  ></Image>
                  &nbsp;NSP Blog
                </div>
              </button>
              ,&nbsp;
            </span>
            <span>
              <span>encontrarme en:&nbsp;</span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="github icon"
                    width="12"
                    height="12"
                    src={githubicon}
                  ></Image>
                  &nbsp;GitHub
                </div>
              </button>
              &nbsp;
            </span>
            <span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="linkedin icon"
                    width="14"
                    height="14"
                    src={linkedinIcon}
                  ></Image>
                  &nbsp;LinkedIn
                </div>
              </button>
              &nbsp;
            </span>
            <span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="instagram icon"
                    width="14"
                    height="14"
                    src={instagramIcon}
                  ></Image>
                  &nbsp;Instagram
                </div>
              </button>
              ,&nbsp;
            </span>
            <span>
              <span>o escribirme a:&nbsp;</span>
              <button className="boton-encontrar">
                <div>
                  <Image
                    className="boton-icon"
                    alt="mail icon"
                    width="14"
                    height="14"
                    src={mailIcon}
                  ></Image>
                  &nbsp;dev@fedeholc.ar
                </div>
              </button>
              .
            </span>
          </div>
        </div>
      </main>

      <footer>
        <div>
          Federico Holc <span className="footer__emoji">⚡️</span>
          {/*  <Image
            className="footer-icon"
            alt="instagram icon"
            width="40"
            height="40"
            src={rayIcon}
          ></Image> */}
          2023
        </div>
      </footer>
    </div>
  );
}
