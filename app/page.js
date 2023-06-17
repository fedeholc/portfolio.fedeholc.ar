import "./globals.css";
import { Archivo_Black, Roboto_Mono } from "next/font/google";
import { Recursive, Montserrat } from "next/font/google";
import Image from "next/image";
import Fotos from "./fotos";

export default function Home() {
  return (
    <div className="main__grid">
      <div className="navbar">Fede Github | Proyectos | Blog</div>

      <main>
        <div className="main-area">
          <h2>¡Hola! =)</h2>
          <div className="main-container">
            <div>
              <p>
                Mi nombre es Federico Holc y soy un desarrollador web front-end,
                con base en Buenos Aires, Argentina.
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
              {/*  <Image
                alt="Foto de la cara de federico holc"
                className="fotosperfil rounded-full border-2 border-black"
                src="/ff2.jpg"
                width="200"
                height="200"
                id="foto1"
              />
              <Image
                alt="Foto de la cara de federico holc"
                className="fotosperfil rounded-full border-2 border-black"
                src="/fp.jpg"
                width="200"
                height="200"
                id="foto2"
              /> */}
            </div>
          </div>
          <div className="  flex flex-wrap flex-row place-items-baseline">
            <span>Podés ver mis&nbsp;</span>
            <span>
              <button className="boton-encontrar">Proyectos</button>,&nbsp;
            </span>
            <span>descargar mi&nbsp;</span>
            <span>
              <button className="boton-encontrar">CV en PDF</button>,&nbsp;
            </span>
            <span>
              <span>leer&nbsp;</span>
              <button className="boton-encontrar">NSP Blog</button>,&nbsp;
            </span>
            <span>
              <span>encontrarme en:&nbsp;</span>
              <button className="boton-encontrar">GitHub</button>&nbsp;
            </span>
            <span>
              <button className="boton-encontrar">LinkedIn</button>&nbsp;
            </span>
            <span>
              <button className="boton-encontrar">Instagram</button>,&nbsp;
            </span>
            <span>
              <span>o escribirme a:&nbsp;</span>
              <button className="boton-encontrar">dev@fedeholc.ar</button>.
            </span>
          </div>
        </div>
      </main>

      <footer>Federico Holc ⚡️ 2023</footer>
    </div>
  );
}
