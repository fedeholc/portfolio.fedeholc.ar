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

  // VER el problema del flickeo no quedó resuelto como pensaba (usando la cookie en lugar de localStorage), y en principio no se si hay solución salvo que sea una SPA, porque si del server viene un theme o nada y luego se cambia va a flickear, si no se da la opcion de cambiar de theme y solo se usa la prefered con css funciona pero da la opción de elegir y guardar esa opción para la próxima, pues si se hace eso que es como lo dejé ahora, si la opcion guarada en localstorage o cookie no coincide con la prefered va a flickear
  // aunque ahora que lo pienso si hay ssr (no ssg) y le llega una cookie debería funcionar ya que podría venir con la opcion elegida... pero no, poorque si tengo habilitado prefered en el css podría no coincidir (si lo quito podría andar pero pierdo la opcion de determinar el theme la primera vez que entra).
  // TODO: quedaría por probar que pasa si esa opcion del prefered está condicional a que haya un data-theme y en ese caso se ignore el prefered

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
