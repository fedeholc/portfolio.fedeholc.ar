"use client";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Fotos() {
  const [foto1, setFoto1] = useState(true);
  return (
    <div>
      {foto1 && (
        <div className="image-wrap rounded-full ">
          <Image
            alt="Foto de la cara de federico holc"
            className="fotosperfil border-2 border-black"
            src="/ff4.jpg"
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
          className="fotosperfil rounded-full border-2 border-black foto2"
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
