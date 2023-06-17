"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import moonIcon from "../public/moon-filled.png";
import brightIcon from "../public/brightness-up.png";

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
      <button className="theme-toggler" onClick={handleChangeTheme}>
        {theme === "light" && (
          <Image
            className="imagen-icon"
            alt="moon icon"
            width="40"
            height="40"
            src={moonIcon}
          ></Image>
        )}
        {theme === "dark" && (
          <Image
            className="imagen-icon"
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
