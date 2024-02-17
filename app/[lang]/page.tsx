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
    <p>
      Mi nombre es <span className="resaltado">Federico Holc</span>,
      <strong> soy desarrollador web</strong>&nbsp;
      <span className="emoji">🧑‍💻</span>, y vivo en Buenos Aires, Argentina.
    </p>
  );
  if (lang === "en") {
    p1 = (
      <p>
        My name is <span className="resaltado">Federico Holc</span>,
        <strong> I am a web developer</strong>&nbsp;
        <span className="emoji">🧑‍💻</span>, and I live in Buenos Aires,
        Argentina.
      </p>
    );
  }

  let p2 = (
    <p>
      De chico amaba jugar al <span className="emoji">👾</span> space invaders
      <span className="emoji">👾</span> en la IBM PC/XT de mi papá, y di mis
      primeros pasos en programación con Logo&nbsp;
      <span className="emoji">🐢</span>. Durante mi último año de escuela
      secundaria (técnica en computación) conseguí trabajo como desarrollador en
      Visual Basic. Luego comencé a estudiar Ciencias de la Computación en la
      universidad.
    </p>
  );
  if (lang === "en") {
    p2 = (
      <p>
        As a kid I loved to play space invaders&nbsp;
        <span className="emoji">👾</span> on my dad's IBM PC/XT, and I took my
        first steps in programming with Logo&nbsp;
        <span className="emoji">🐢</span>. During my last year of high school I
        got a job as a developer in Visual Basic. Then I started studying
        Computer Science at the university.
      </p>
    );
  }
  let p3 = (
    <p>
      Pero era el año 2001 y a la Argentina y a mi vida les esperaba un plot
      twist&nbsp;<span className="emoji">🙈</span>, o mejor dicho, un ¡epic
      fail!&nbsp;
      <span className="emoji">💩</span> Abandoné la programación.&nbsp;
      <span className="emoji">🤦🏻😭☠️</span>&nbsp;
    </p>
  );
  if (lang === "en") {
    p3 = (
      <p>
        But it was the year 2001 and Argentina and my life were waiting for a
        plot twist&nbsp;<span className="emoji">🙈</span>, or better said, an
        epic fail!&nbsp;
        <span className="emoji">💩</span> I quit programming.&nbsp;
        <span className="emoji">🤦🏻😭☠️</span>&nbsp;
      </p>
    );
  }

  let p4 = (
    <p>
      En los años que siguieron fui sociólogo&nbsp;
      <span className="emoji">🤔</span>, y profesor en escuelas secundarias y en
      la Universidad de Buenos Aires. Allí aprendí y enseñé todo lo que
      pude.&nbsp;
      <span className="emoji">👨‍🏫</span>
    </p>
  );
  if (lang === "en") {
    p4 = (
      <p>
        In the years that followed I was a sociologist&nbsp;
        <span className="emoji">🤔</span>, and a teacher in high schools and at
        the University of Buenos Aires. There I learned and taught everything I
        could.&nbsp;
        <span className="emoji">👨‍🏫</span>
      </p>
    );
  }
  let p5 = (
    <p>
      Hace un tiempo, a partir de utilizar software fotográfico de código
      abierto (¡también estudié fotografía!&nbsp;
      <span className="emoji">📸</span>), me volvió a interesar profundamente la
      programación. Me encontré con que el desarrollo web era algo muy distinto
      al de hace 20 años&nbsp;
      <span className="emoji">🤯</span>, ¡y me atrapó!&nbsp;
      <span className="emoji">🕸️</span> Desde ese momento no paré de aprender ni
      de programar.<span className="emoji">🚀</span>
    </p>
  );
  if (lang === "en") {
    p5 = (
      <p>
        Some time ago, since using open source photo software (I also studied
        photography!&nbsp;
        <span className="emoji">📸</span>), I became deeply interested in
        programming again. I found that web development was very different from
        20 years ago&nbsp;
        <span className="emoji">🤯</span>, and it caught me!&nbsp;
        <span className="emoji">🕸️</span> From that moment I neve stopped
        learning and programming.&nbsp;
        <span className="emoji">🚀</span>
      </p>
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
        <div>
          {p3}
          {p4}
          {p5}
        </div>
        <div className="content-links">
          <span>{dictionary.intro.podesver[lang]}&nbsp;</span>
          <span>
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
            ,&nbsp;
          </span>
          <span>{dictionary.intro.download[lang]}&nbsp;</span>
          <span>
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
            ,&nbsp;
          </span>
          <span>
            <span>leer&nbsp;</span>
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
            ,&nbsp;
          </span>
          <span>
            <span>{dictionary.intro.encontrarme[lang]}&nbsp;</span>
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
            &nbsp;
          </span>
          <span>
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
            &nbsp;
          </span>
          <span>
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
            ,&nbsp;
          </span>
          <span>
            <span>{dictionary.intro.escribirme[lang]}&nbsp;</span>
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
            .
          </span>
        </div>
        <br />

        <div className="centrar">
          <Image src={herb} alt="herb emoji" width={26} quality={100} />
        </div>
      </article>
    </div>
  );
}
