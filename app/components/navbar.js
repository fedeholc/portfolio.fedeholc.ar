//NextJS
import Image from "next/image";
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
    <div className={navbar.container}>
      <Image
        className={navbar.icon}
        alt="github icon"
        width="40"
        height="40"
        src={githubicon}
      ></Image>
      <div className={navbar.separator}>|</div>
      <Image
        className={navbar.icon}
        alt="linkedin icon"
        width="40"
        height="40"
        src={linkedinIcon}
      ></Image>
      <div className={navbar.separator}>|</div>
      <Image
        className={navbar.icon}
        alt="mail icon"
        width="40"
        height="40"
        src={mailIcon}
      ></Image>
      <div className={navbar.separator}>|</div>
      <Image
        className={navbar.icon}
        alt="instagram icon"
        width="40"
        height="40"
        src={instagramIcon}
      ></Image>
      <div className={navbar.separator}>|</div>
      <div>CV</div>
      <div className={navbar.separator}>|</div>
      <div>Proyectos</div>
      <div className={navbar.separator}>|</div>
      <div>Blog</div>
      <div className={navbar.separator}>|</div>
      <Theme></Theme>
    </div>
  );
}
