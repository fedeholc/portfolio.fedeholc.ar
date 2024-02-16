"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";
import langIcon from "@public/language.png";
import Image from "next/image";
import navbar from "./navbar.module.css";

export default function LangSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  let cambio = lang === "es" ? "en" : "es";

  return (
    <div>
      <Link
        className={navbar.language}
        href={redirectedPathName(cambio as Locale)}
      >
        <Image
          className={navbar.icon}
          alt="language icon"
          width="40"
          height="40"
          src={langIcon}
        ></Image>
        {cambio}
      </Link>
    </div>
  );
}
