//NextJS
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
//styles
import "@app/globals.css";
//icons
import githubicon from "@public/brand-github.png";
import paperclipIcon from "@public/paperclip.png";
import starIcon from "@public/star.png";
import notesIcon from "@public/notes.png";
import mailIcon from "@public/mail.png";
import instagramIcon from "@public/brand-instagram.png";
import linkedinIcon from "@public/brand-linkedin.png";
import herb from "@public/herb.png";
//components
import Fotos from "./components/fotos";
//lang
import { getDictionary } from "@app/get-dictionary";
import { Locale } from "@app/i18n-config";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary();

  const h2a =
    lang === "en" ? (
      <h2 className="heading__title1">
        Hi!&nbsp;<span className="heading__smile">=)</span>&nbsp;
      </h2>
    ) : (
      <h2 className="heading__title1">
        ¡Hola!&nbsp;<span className="heading__smile">=)</span>&nbsp;
      </h2>
    );

  const h2b =
    lang === "en" ? (
      <h2 className="heading__title2">How you doing?</h2>
    ) : (
      <h2 className="heading__title2">¿Cómo andás?</h2>
    );

  const p1 =
    lang === "en" ? (
      <>
        <p>
          My name is <span className="resaltado">Federico Holc</span>&nbsp;
          <span className="emoji">🧑‍💻</span>, and I live in Buenos Aires,
          Argentina.
          <br />
        </p>
        <p>
          I am a&nbsp;
          <strong>full stack web developer</strong> and I care especially about
          &nbsp;
          <strong>UX/UI design</strong>: I want what I build to be clear, usable
          and accessible. I work with React, TypeScript and Node, and I like
          creating solutions end to end, from design to backend and
          infrastructure.&nbsp;
          <span className="emoji">🌈</span>
        </p>
      </>
    ) : (
      <>
        <p>
          Mi nombre es <span className="resaltado">Federico Holc</span>&nbsp;
          <span className="emoji">🧑‍💻</span>, y vivo en Buenos Aires,
          Argentina.
          <br />
        </p>
        <p>
          Soy <strong>desarrollador web full stack</strong> y me importa
          especialmente el&nbsp;
          <strong>diseño UX/UI</strong>: que lo que construyo sea claro, usable
          y accesible. Trabajo con React, TypeScript y Node, y me gusta crear
          soluciones de principio a fin, del diseño al backend y la
          infraestructura.&nbsp;
          <span className="emoji">🌈</span>
        </p>
      </>
    );

  const p2 =
    lang === "en" ? (
      <>
        <p>
          I use&nbsp;
          <strong>AI as a core part of my development process</strong>, with
          &nbsp;
          <strong>automation workflows</strong> that let me go faster without
          giving up quality: AI proposes and I review. I also integrate AI into
          the product when it adds value.&nbsp;
          <span className="emoji">🕸️</span>
        </p>
        <p>
          I started programming&nbsp;
          <strong>writing code by hand</strong>, and that foundation is what
          today lets me design and supervise what AI produces. On top of that,
          my background in teaching and social sciences complements my technical
          profile, bringing clear communication and the ability to translate
          complex topics for any team or client.&nbsp;
          <span className="emoji">👨‍🏫</span>
        </p>
      </>
    ) : (
      <>
        <p>
          Uso la&nbsp;
          <strong>IA como parte central de mi proceso de desarrollo</strong>,
          con <strong>workflows de automatización</strong> que me permiten ir más
          rápido sin resignar calidad: la IA propone y yo reviso. También
          integro IA en el producto cuando aporta valor.&nbsp;
          <span className="emoji">🕸️</span>
        </p>
        <p>
          Empecé a programar&nbsp;
          <strong>escribiendo código a mano</strong>, y esa base de fundamentos
          es la que hoy me permite diseñar y supervisar lo que produce la IA.
          Además, mi experiencia en docencia y ciencias sociales complementa mi
          perfil técnico, aportando una comunicación clara y la capacidad de
          traducir temas complejos para cualquier equipo o cliente.&nbsp;
          <span className="emoji">👨‍🏫</span>
        </p>
      </>
    );

  const buttons: {
    icon: typeof starIcon;
    iconWidth: number;
    label: string;
    href: string;
    external?: boolean;
    text: string;
  }[] = [
    {
      icon: starIcon,
      iconWidth: 13,
      label: dictionary.intro.proyectos[lang],
      href: `/${lang}/proyectos`,
      text: dictionary.intro.mas2[lang],
    },
    {
      icon: paperclipIcon,
      iconWidth: 12,
      label: dictionary.intro.cvpdf[lang],
      href: `/${lang}/cv`,
      text: dictionary.intro.mas5[lang],
    },
    {
      icon: githubicon,
      iconWidth: 12,
      label: "GitHub",
      href: "https://github.com/fedeholc",
      external: true,
      text: dictionary.intro.mas3[lang],
    },
    {
      icon: linkedinIcon,
      iconWidth: 14,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/federicoholc/",
      external: true,
      text: dictionary.intro.mas6[lang],
    },
    {
      icon: notesIcon,
      iconWidth: 10,
      label: "err0r Blog",
      href: "https://err0r.fedeholc.ar",
      external: true,
      text: dictionary.intro.mas4[lang],
    },
    {
      icon: instagramIcon,
      iconWidth: 14,
      label: "Instagram",
      href: "https://www.instagram.com/fedeholc/",
      external: true,
      text: dictionary.intro.mas7[lang],
    },
  ];

  return (
    <div>
      <article className="article__container">
        <hgroup className="heading">
          {h2a}
          {h2b}
        </hgroup>
        <div className="main-container">
          <div>
            {p1}
            {p2}
          </div>
          <div className="foto-container">
            <Fotos></Fotos>
          </div>
        </div>

        <div>{dictionary.intro.mas[lang]}</div>
        <div className="buttons-grid">
          {buttons.map((button, index) => (
            <Fragment key={index}>
              <div>
                <button className="link_button">
                  <div>
                    <Image
                      className="link_button__icon"
                      alt={`${button.label} icon`}
                      width={button.iconWidth}
                      /* @ts-ignore */
                      height="auto"
                      src={button.icon}
                    ></Image>
                    &nbsp;
                    <Link
                      href={button.href}
                      {...(button.external ? { target: "_blank" } : {})}
                    >
                      {button.label}
                    </Link>
                  </div>
                </button>
              </div>
              <div>{button.text}</div>
            </Fragment>
          ))}
        </div>

        <div className="mail-container">
          {" "}
          <div>{dictionary.intro.mas8[lang]}</div>
          <div>
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="mail icon"
                  width="14"
                  /* @ts-ignore */
                  height="auto"
                  src={mailIcon}
                ></Image>
                &nbsp;
                <Link href="mailto:federicoholc@gmail.com">
                  federicoholc@gmail.com
                </Link>
              </div>
            </button>
          </div>
        </div>

        <br />

        <div className="centrar">
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
      </article>
    </div>
  );
}
