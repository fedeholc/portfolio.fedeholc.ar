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
import instagramIcon from "../public/brand-instagram.png";
import linkedinIcon from "../public/brand-linkedin.png";

export default function Home() {
  return (
    <div className="main__grid">
      <div className="navbar">
        <div className="navbar-icons">
          <Image
            className="imagen-icon"
            alt="github icon"
            width="20"
            height="20"
            src={githubicon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="linkedin icon"
            width="20"
            height="20"
            src={linkedinIcon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="mail icon"
            width="20"
            height="20"
            src={mailIcon}
          ></Image>
          <div className="separador">|</div>
          <Image
            className="imagen-icon"
            alt="instagram icon"
            width="20"
            height="20"
            src={instagramIcon}
          ></Image>
          <div className="separador">|</div>
          <div>CV</div>
          <div className="separador">|</div>
          <div>Proyectos</div> <div className="separador">|</div>
          <div>Blog</div>
        </div>
      </div>

      <main>
        <div className="main-area">
          <div className="flex">
            <h2>¡Hola!&nbsp;</h2>
            <h2 className="smile"> =)</h2>
          </div>
          <div className="main-container  ">
            <div>
              <p>
                Mi nombre es Federico Holc y soy un desarrollador web front-end,
                viviendo en Buenos Aires, Argentina.
              </p>
              <p>
                Trabajo principalmente con HTML, CSS, JavaScript y React, así
                como también con NextJS, Node, y bases de datos SQL o MongoDB
                cuando los proyectos lo requieren.
              </p>
              <p>
                Cuando no estoy programando o aprendiendo cosas nuevas, me
                dedico a la fotografía.
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

      <footer>Federico Holc ⚡️ 2023</footer>
    </div>
  );
}
