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
              ¡Hola! <span className="emoji">👋🏻</span> ¿Cómo estás?&nbsp;{" "}
            </h2>
            <h2 className="smile"> =)</h2>
          </div>
          <div className="main-container  ">
            <div>
              <p>
                Mi nombre es Federico Holc, soy desarrollador web 🧑‍💻, y vivo en
                Buenos Aires, Argentina.
              </p>
              <p>
                De muy chico comencé a jugar 👾 space invaders 👾 en una XT286
                que había en casa, y di mis primeros pasos en la programación
                usado Logo 🐢. Para el último año de la escuela secundaria
                (técnica en computación) ya estaba trabajando como desarrollador
                en Visual Basic. Luego comencé a estudiar Ciencias de la
                Computación en la UBA. Pero era el año 2001 y en la Argentina y
                en mi vida hubo un "plot twist" 🙈, o por qué no, un ¡epic
                fail!💩 Dejé la programación.🤦🏻😭☠️
              </p>
              <p>
                En los años que siguieron fuí sociólogo, y profesor en escuelas
                secundarias y en la UBA. Allí aprendí y enseñé todo lo que
                pude.👨‍🏫
              </p>
              <p>
                Hace un tiempo, a partir de utilizar software fotográfico de
                código abierto (¡también estudié fotografía!📸), me volvió a
                interesar profundamente la programación. Me encontré con que el
                desarrollo web era algo muy distinto al de hace 20 años 🤯, ¡me
                atrapó! 🕸️, y desde entonces no paré de aprender y programar
                (ahora también con una mirada puesta en la experiencia y las
                necesidades de los usuarios y usuarias que antes no tenía). ¿Qué
                mejor que hacerlo a tiempo completo ayudando a una organización
                a alcanzar sus objetivos? 🤝
              </p>
            </div>
            <div className="foto-container">
              <Fotos></Fotos>
            </div>
          </div>
          <div className="  flex flex-wrap flex-row place-items-baseline">
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
