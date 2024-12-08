"use client";
import Image from "next/image";
import { useState } from "react";
import "@app/globals.css";
import fotos from "./fotos.module.css";
import f1 from "@public/fedelin.jpeg";
import f2 from "@public/ff4.jpg";
export default function Fotos() {
  const [foto1, setFoto1] = useState(true);
  return (
    <div>
      {foto1 && (
        <div className={fotos.fotoperfil__container}>
          <Image
            alt="Foto de la cara de federico holc"
            className={fotos.fotoperfil__foto_animada}
            src={f2} /* TODO: cambiar la forma de cargar */
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
          src={f1}
          height="200"
          width="200"
          id="foto2"
          onMouseLeave={() => setFoto1(true)}
        />
      )}
    </div>
  );
}
