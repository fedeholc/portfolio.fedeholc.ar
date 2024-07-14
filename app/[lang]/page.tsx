//NextJS
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
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary();
  let h2a = (
    <h2 className="heading__title1">
      ¡Hola!&nbsp;<span className="heading__smile">=)</span>&nbsp;
    </h2>
  );
  if (lang === "en") {
    h2a = (
      <h2 className="heading__title1">
        Hi!&nbsp;<span className="heading__smile">=)</span>&nbsp;
      </h2>
    );
  }
  let h2b = <h2 className="heading__title2">¿Cómo andás?</h2>;
  if (lang === "en") {
    h2b = <h2 className="heading__title2">How you doing?</h2>;
  }

  let p1 = (
    <>
      <p>
        Mi nombre es <span className="resaltado">Federico Holc</span>&nbsp;
        <span className="emoji">🧑‍💻</span>, y vivo en Buenos Aires, Argentina.
        <br />
      </p>
      <p>
        Soy&nbsp;
        <strong>desarrollador web</strong> enfocado en frontend&nbsp;
        <span className="emoji">🌈</span>&nbsp;pero con conocimientos y
        curiosidad por el backend, los web standards, y el software de código
        abierto.&nbsp;
        <span className="emoji">👾</span>
      </p>
    </>
  );
  if (lang === "en") {
    p1 = (
      /*      <p>
        My name is <span className="resaltado">Federico Holc</span>,
        <strong> I am a web developer</strong>&nbsp;
        <span className="emoji">🧑‍💻</span>, and I live in Buenos Aires,
        Argentina.
      </p> */
      <>
        <p>
          My name is <span className="resaltado">Federico Holc</span>&nbsp;
          <span className="emoji">🧑‍💻</span>, and I live in Buenos Aires,
          Argentina.
          <br />
        </p>
        <p>
          I am a&nbsp;
          <strong>web developer</strong> focused on frontend&nbsp;
          <span className="emoji">🌈</span>&nbsp;but also with knowledge and
          curiosity about backend, web standards, and open source
          software.&nbsp;
          <span className="emoji">👾</span>
        </p>
      </>
    );
  }

  let p2 = (
    <>
      <p>
        Me inicié como autodidácta y ahora estoy próximo a recibirme en una
        tecnicatura superior en desarrollo de software. &nbsp;
        <span className="emoji">🚀</span>
      </p>
      <p>
        En el pasado fui sociólogo y profesor &nbsp;
        <span className="emoji">👨‍🏫</span>&nbsp; en escuelas y en la universidad
        de buenos aires.
      </p>
    </>
  );
  if (lang === "en") {
    p2 = (
      <>
        <p>
          I started as a self-taught and now I am about to get a technical
          degree on software development. &nbsp;
          <span className="emoji">🚀</span>
        </p>
        <p>
          Also, in the past I was a sociologist and a teacher &nbsp;
          <span className="emoji">👨‍🏫</span>&nbsp;in schools and at the
          University of Buenos Aires.
        </p>
      </>
    );
  }

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

        {/*  <div>
          {p3}
          {p4}
          {p5}
        </div> */}

        <div>{dictionary.intro.mas[lang]}</div>
        <div className="buttons-grid">
          <div>
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="projects icon"
                  width="13"
                  /* @ts-ignore */
                  height="auto"
                  src={starIcon}
                ></Image>
                &nbsp;
                <Link href={`${lang}/proyectos`}>
                  {dictionary.intro.proyectos[lang]}
                </Link>
              </div>
            </button>
          </div>
          <div>{dictionary.intro.mas2[lang]}</div>
          <div>
            {" "}
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="github icon"
                  width="12"
                  /* @ts-ignore */
                  height="auto"
                  src={githubicon}
                ></Image>
                &nbsp;
                <Link href="https://github.com/fedeholc" target="_blank">
                  GitHub
                </Link>
              </div>
            </button>
          </div>
          <div>{dictionary.intro.mas3[lang]}</div>
          <div>
            {" "}
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="blog icon"
                  width="10"
                  /* @ts-ignore */
                  height="auto"
                  src={notesIcon}
                ></Image>
                &nbsp;
                <Link target="_blank" href="https://nsp.fedeholc.ar">
                  NSP Blog
                </Link>
              </div>
            </button>
          </div>
          <div>{dictionary.intro.mas4[lang]}</div>
          <div>
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="paper clip icon"
                  width="12"
                  /* @ts-ignore */
                  height="auto"
                  src={paperclipIcon}
                ></Image>
                &nbsp;<Link href="/cv">{dictionary.intro.cvpdf[lang]}</Link>
              </div>
            </button>
          </div>
          <div>{dictionary.intro.mas5[lang]}</div>
          <div>
            {" "}
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="linkedin icon"
                  width="14"
                  height="14"
                  src={linkedinIcon}
                ></Image>
                &nbsp;
                <Link
                  href="https://www.linkedin.com/in/federicoholc/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </div>
            </button>
          </div>
          <div>{dictionary.intro.mas6[lang]}</div>
          <div>
            {" "}
            <button className="link_button">
              <div>
                <Image
                  className="link_button__icon"
                  alt="instagram icon"
                  width="14"
                  height="14"
                  src={instagramIcon}
                ></Image>
                &nbsp;
                <Link
                  href="https://www.instagram.com/fedeholc/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </div>
            </button>
          </div>
          <div>
            {dictionary.intro.mas7[lang]}&nbsp;
            <span className="emoji">📸</span>
          </div>
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
