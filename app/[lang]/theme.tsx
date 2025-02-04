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
  // el problema del flickeo  quedó resuelto usando la cookie en lugar de localStorage, entiendo que es porque la cookie se setea en el servidor y localStorage en el cliente (de ese modo tampoco hay problema con el SSR/SSG)

  // si en algún momento decido cambiar el uso de dataset por todo con variables css, investigar si se puede hacer algo como acá con :has y/o :not como acá https://www.smashingmagazine.com/2024/03/setting-persisting-color-scheme-preferences-css-javascript/

  //TODO: ojo, revisar esto, en la consola da error de que no existe window, a la vista funciona bien, pero si lo cambio con:

   let userPreference = "dark";

  if (typeof window !== "undefined") {
    userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } 
//TODO: vuelve a hacer el flickeo.

 /*  const userPreference = window?.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light"; */
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
