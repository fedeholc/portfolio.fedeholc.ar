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
import Highlights from "./components/highlights";
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
          <strong>full stack web developer</strong> and I use&nbsp;
          <strong>AI as a core part of my development process</strong>: I write,
          test, lint and document with agents, and I design <em>skills</em> that
          reproduce the project&apos;s patterns. That lets me build faster&nbsp;
          <strong>without giving up quality</strong>. I work with React,
          TypeScript and Node.&nbsp;
          <span className="emoji">🚀</span>
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
          Soy&nbsp;
          <strong>desarrollador web full stack</strong> y uso la&nbsp;
          <strong>IA como parte central de mi proceso de desarrollo</strong>:
          escribo, testeo, linteo y documento con agentes, y diseño{" "}
          <em>skills</em> que reproducen los patrones del proyecto. Eso me
          permite construir más rápido&nbsp;
          <strong>sin resignar calidad</strong>. Trabajo con React, TypeScript y
          Node.&nbsp;
          <span className="emoji">🚀</span>
        </p>
      </>
    );

  const p2 =
    lang === "en" ? (
      <>
        <p>
          I also integrate AI into the product when it adds value: content
          generation, semantic search and document processing.&nbsp;
          <span className="emoji">🕸️</span>
        </p>
        <p>
          The key is that speed does not degrade quality: type-check, lint and a
          base of ~430 tests work as a safety net. I come from teaching and
          social sciences, which I now bring as the ability to communicate and
          explain complex ideas.&nbsp;
          <span className="emoji">👨‍🏫</span>
        </p>
      </>
    ) : (
      <>
        <p>
          También integro IA en el producto cuando aporta valor: generación de
          contenido, búsqueda semántica y procesamiento de documentos.&nbsp;
          <span className="emoji">🕸️</span>
        </p>
        <p>
          La clave es que la velocidad no degrade la calidad: type-check, lint y
          una base de ~430 tests funcionan como red de seguridad. Vengo de la
          docencia y las ciencias sociales, que hoy aporto como capacidad de
          comunicar y explicar temas complejos.&nbsp;
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

        <Highlights lang={lang} />

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
