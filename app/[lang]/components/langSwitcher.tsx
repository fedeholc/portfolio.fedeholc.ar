"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@app/i18n-config";
import langIcon from "@public/language.png";
import Image from "next/image";
import navbar from "./navbar.module.css";

export default function LangSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  let cambio = lang === "es" ? "en" : "es";

  const handleLanguageChange = (e: React.MouseEvent) => {
    e.preventDefault();

    // Establecer cookie para recordar la preferencia
    document.cookie = `NEXT_LOCALE=${cambio}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;

    // Navegar a la nueva URL
    router.push(redirectedPathName(cambio as Locale));
  };

  return (
    <div>
      <Link
        className={navbar.language}
        href={redirectedPathName(cambio as Locale)}
        onClick={handleLanguageChange}
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
