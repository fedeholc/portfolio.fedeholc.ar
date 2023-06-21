//Next.js
"use client";
import { useState, useEffect } from "react";
//icons
import Image from "next/image";
import moonIcon from "../public/moon-filled.png";
import brightIcon from "../public/brightness-up.png";
//styles
import navbar from "./components/navbar.module.css";
import "./globals.css";

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div>
      <button className={navbar.theme__toggler} onClick={handleChangeTheme}>
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
