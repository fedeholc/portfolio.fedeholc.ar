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

export default function Theme({ buttonTitle }: { buttonTitle: string }) {
  // TODO: si se implementa el cambio de theme de este modo, no se puede usar SSG porque no se puede acceder al window object en tiempo de compilación, ver como se puede resolver
  /*   let tempPreference = "light";

  if (typeof window !== "undefined") {
    const userPreference = window?.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const storedPreference = localStorage.getItem("theme");
    tempPreference = storedPreference || userPreference;
  } */

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
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
