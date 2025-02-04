//Next.js
"use client";
import { useState, useEffect } from "react";
//icons
import Image from "next/image";
import moonIcon from "@public/moon-filled.png";
import brightIcon from "@public/brightness-up.png";
//styles
import navbar from "./components/navbar.module.css";
import "@app/globals.css";

export default function Theme({
  buttonTitle,
  themeCookie,
}: {
  buttonTitle: string;
  themeCookie: string;
}) {
  // si en algún momento decido cambiar el uso de dataset por todo con variables css, investigar si se puede hacer algo como acá con :has y/o :not como acá https://www.smashingmagazine.com/2024/03/setting-persisting-color-scheme-preferences-css-javascript/

  // VER el problema del flickeo no quedó resuelto como pensaba (usando la cookie en lugar de localStorage) lo que sucedía es extraño: con el código:
  /* const userPreference = window?.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";"" 
  */
  // se producía un error por no existir window del lado del servidor y por algun motivo ese error hacía que no se produzca el flickeo (no sé por qué)
  // en cambio si se usa el código que está debo y checkea si hay objeto window, se produce el flickeo.
  // para evitarlo lo que hice fue desactivar SSG quitando generateStaticParams de [lang]/layout.tsx
  
  let userPreference = "dark";
  if (typeof window !== "undefined") {
    userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const [theme, setTheme] = useState(themeCookie || userPreference);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleChangeTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  return (
    <div>
      <button
        title={buttonTitle}
        className={navbar.theme__toggler}
        onClick={handleChangeTheme}
      >
        {theme === "light" && (
          <Image
            className={navbar.icon}
            alt="moon icon"
            width="40"
            height="40"
            src={moonIcon}
          ></Image>
        )}
        {theme === "dark" && (
          <Image
            className={navbar.icon}
            alt="moon icon"
            width="40"
            height="40"
            src={brightIcon}
          ></Image>
        )}
      </button>
    </div>
  );
}
