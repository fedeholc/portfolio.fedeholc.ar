//NextJS
import Image from "next/image";
import Link from "next/link";
//icons
import githubicon from "../../public/brand-github.png";
import mailIcon from "../../public/mail.png";
import instagramIcon from "../../public/brand-instagram.png";
import linkedinIcon from "../../public/brand-linkedin.png";
//components
import Theme from "../theme";
//styles
import navbar from "./navbar.module.css";

export default function NavBar() {
  return (
    <navbar className={navbar.container}>
      <div className={navbar.container__left}>
        <div className={navbar.toolbar_item_inicio}>
          <Link href="/">
            <span className={navbar.emoji__left}>⚡️</span>
            <span title="Vuelve a la página de inicio" className="inicio-link">
              inicio
            </span>
          </Link>
        </div>
      </div>
      <div className={navbar.container__right}>
        <div className={navbar.toolbar_item}>
          <Link
            title="Enlace al perfil de Github"
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
            title="Enlace al perfil de LinkedIn"
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
            title="Enlace para enviar un mail a federicoholc@gmail.com"
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
            title="Enlace al perfil de Instagram"
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
          <div>
            <Link title="Enlace al Currículum Vitae" href="/cv">
              CV
            </Link>
          </div>
        </div>
        <div className={navbar.toolbar_item_text}>
          <Link title="Enlace a la página de proyectos" href="/proyectos">
            Proyectos
          </Link>
        </div>
        <div className={navbar.toolbar_item_text}>
          <Link
            title="Enlace al blog NuncaSupeProgramar"
            target="_blank"
            href="https://nsp.fedeholc.ar"
          >
            Blog
          </Link>
        </div>
        <div className={navbar.toolbar_item}>
          <Theme></Theme>
        </div>

        {/* 
      

      

     
        */}
      </div>
    </navbar>
  );
}
