"use client";
import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import fotos from "./fotos.module.css";

export default function Fotos() {
  const [foto1, setFoto1] = useState(true);
  return (
    <div>
      {foto1 && (
        <div className={fotos.fotoperfil__container}>
          <Image
            alt="Foto de la cara de federico holc"
            className={fotos.fotoperfil__foto_animada}
            src="/ff4.jpg" /* TODO: cambiar la forma de cargar */
            height="200"
            width="200"
            id="foto1"
            onMouseEnter={() => setFoto1(false)}
          />
        </div>
      )}
      {!foto1 && (
        <Image
          alt="Foto de la cara de federico holc"
          className={fotos.fotoperfil__foto}
          src="/fp.jpg"
          height="200"
          width="200"
          id="foto2"
          onMouseLeave={() => setFoto1(true)}
        />
      )}
    </div>
  );
}
