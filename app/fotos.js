"use client";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Fotos() {
  const [foto1, setFoto1] = useState(true);
  return (
    <div>
      {foto1 && (
        <Image
          alt="Foto de la cara de federico holc"
          className="fotosperfil rounded-full border-2 border-black"
          src="/ff2.jpg"
          width="200"
          height="200"
          id="foto1"
          onMouseEnter={() => setFoto1(false)}
        />
      )}
      {!foto1 && (
        <Image
          alt="Foto de la cara de federico holc"
          className="fotosperfil rounded-full border-2 border-black"
          src="/fp.jpg"
          width="200"
          height="200"
          id="foto2"
          onMouseLeave={() => setFoto1(true)}
        />
      )}
    </div>
  );
}
