//NextJS
import Image from "next/image";
import Link from "next/link";
//icons
import githubicon from "@public/brand-github.png";
import mailIcon from "@public/mail.png";
import instagramIcon from "@public/brand-instagram.png";
import linkedinIcon from "@public/brand-linkedin.png";
//components
import Theme from "../theme";
//styles
import navbar from "./navbar.module.css";
import LangSwitcher from "./langSwitcher";
import { type Locale } from "@app/i18n-config";
import { getDictionary } from "@app/get-dictionary";

export default async function NavBar({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary();

  return (
    <div className={navbar.container}>
      <div className={navbar.container__left}>
        <div className={navbar.toolbar_item_inicio}>
          <Link href="/">
            <span className={navbar.emoji__left}>⚡️</span>
            <span
              title={dictionary.navbar.inicioTitle[lang]}
              className="inicio-link"
            >
              {dictionary.navbar.inicio[lang]}
            </span>
          </Link>
        </div>
      </div>
      <div className={navbar.container__right}>
        <div className={navbar.toolbar_item}>
          <Link
            title={dictionary.navbar.githubTitle[lang]}
            href="https://github.com/fedeholc"
            target="_blank"
          >
            <Image
              className={navbar.icon}
              alt="github icon"
              width="40"
              height="40"
              src={githubicon}
            ></Image>
          </Link>
        </div>
        <div className={navbar.toolbar_item}>
          <Link
            title={dictionary.navbar.linkedinTitle[lang]}
            href="https://www.linkedin.com/in/federicoholc/"
            target="_blank"
          >
            <Image
              className={navbar.icon}
              alt="linkedin icon"
              width="40"
              height="40"
              src={linkedinIcon}
            ></Image>
          </Link>
        </div>
        <div className={navbar.toolbar_item}>
          <Link
            title={dictionary.navbar.emailTitle[lang]}
            href="mailto:federicoholc@gmail.com"
            target="_blank"
          >
            <Image
              className={navbar.icon}
              alt="mail icon"
              width="40"
              height="40"
              src={mailIcon}
            ></Image>
          </Link>
        </div>
        <div className={navbar.toolbar_item}>
          <Link
            title={dictionary.navbar.instagramTitle[lang]}
            href="https://www.instagram.com/fedeholc"
            target="_blank"
          >
            <Image
              className={navbar.icon}
              alt="instagram icon"
              width="40"
              height="40"
              src={instagramIcon}
            ></Image>
          </Link>
        </div>
        <div className={navbar.toolbar_item_text}>
          {/*        <div>
            <button onClick={() => router.push("/" + lang + "/cv")}>CV</button>
          </div> */}
          <Link title={dictionary.navbar.cvTitle[lang]} href="/cv">
            {dictionary.navbar.cv[lang]}
          </Link>
        </div>
        <div className={navbar.toolbar_item_text}>
          <Link
            title={dictionary.navbar.proyectosTitle[lang]}
            href="/proyectos"
          >
            {dictionary.navbar.proyectos[lang]}
          </Link>
          {/*    <button onClick={() => router.push("/" + lang + "/proyectos")}>
            {dictionary["navbar"].proyectos}
          </button> */}
        </div>
        <div className={navbar.toolbar_item_text}>
          <Link
            title={dictionary.navbar.blogTitle[lang]}
            target="_blank"
            href="https://nsp.fedeholc.ar"
          >
            Blog
          </Link>
        </div>
        <div className={navbar.toolbar_item}>
          <Theme buttonTitle={dictionary.navbar.themeTitle[lang]}></Theme>
        </div>
        <div className={navbar.toolbar_item_text}>
          <LangSwitcher lang={lang}></LangSwitcher>
        </div>
      </div>
    </div>
  );
}
