import proyectos from "../proyectos/proyectos.module.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import paperclipIcon from "../../public/paperclip.png";

import CardProyecto from "@app/components/cardProyecto";

import herb from "@public/herb.png";

/*         👾🌿🍁🪐🌟🛠️💘🕸️🚲️🎼⭐
 */
export default function CV() {
  return (
    <div className={proyectos.proyecto}>
      <div className={proyectos.header_cv}>CURRICULUM VITAE</div>
      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>

      <div className={`${proyectos.proyecto__container} `}>
        <div className="centrar">
          <button className="link_button">
            <div>
              <Image
                className="link_button__icon"
                alt="paper clip icon"
                width="12"
                height="12"
                src={paperclipIcon}
              ></Image>
              &nbsp;
              <Link
                href="https://drive.google.com/file/d/1BNw1v4-W_l0jPlDHhmw8mTPNYylQf2Gn/view?usp=sharing"
                target="_blank"
              >
                descargar en PDF
              </Link>
            </div>
          </button>
          <br />
        </div>
        <div className={proyectos.columns1}>
          <section>
            <h3>Resumen de calificaciones </h3>
            <p>
              Desarrollador web especializado en front-end. Mis habilidades y
              experiencia incluyen:
            </p>
            <ul>
              <li>HTML / CSS </li>
              <li>JavaScript</li>
              <li>React / Next.js</li>
              <li>Responsive web design / Mobile-First</li>
              <li>Node.js / Express</li>
              <li>MySQL </li>
              <li>Git / GitHub</li>
            </ul>
          </section>

          <section>
            <h3>Proyectos</h3>
            <div className={proyectos.cv__cards__container}>
              <CardProyecto
                buttonLink="/proyectos/anota"
                titulo="📝 ¡ANOTÁ! "
                subtitulo="¿Another note taking app?"
                descripcion="Si te preocupa la organización de la información y la productividad tenés que tener una app que se adapte a sus necesidades. Como no encontré la mía, intenté hacerla."
              />

              <CardProyecto
                titulo="<NuncaSupeProgramar/>"
                buttonLink="/proyectos/nsp"
                subtitulo="Blog de apuntes para aprender desarrollo web 👾"
                descripcion="El blog sigue siendo una de las mejores herramientas para aprender, organizar apuntes, y compartir el conocimiento. Sencillo, rápido, y accesible."
              />
              <CardProyecto
                titulo="Full size images for IG 📷"
                buttonLink="/proyectos/insta"
                subtitulo=""
                descripcion="Extensión para el navegador Chrome que permite ver imágenes de Instagram a máxima resolución y en pantalla completa, sin distracciones."
              />
              <CardProyecto
                titulo="MyTvShows 📺"
                buttonLink="/proyectos/tv"
                subtitulo=""
                descripcion="Una aplicación que te permite llevar registro de tus series favoritas y ver fácilmente cuáles tienen nuevos episodios."
              />
              <CardProyecto
                titulo="👨‍💻 Argentina Programa "
                buttonLink="/proyectos/ap"
                subtitulo="Trabajo final del curso de desarrollo web full stack"
                descripcion="Es un sitio web a modo de C.V. online que integra distintas tecnologías y funcionalidades. Además de aprender mucho haciéndolo, me permitió reencontrarme felizmente con la programación. =)"
              />
            </div>
          </section>
          <section>
            <h3>Idiomas</h3>
            <ul>
              <li>
                <strong>Español:</strong> nativo.
              </li>
              <li>
                <strong>Inglés:</strong> professional working proficiency. First
                Certificate Exam (B2 First), Cambridge University.
              </li>
            </ul>
          </section>
          <section>
            <h3>Formación Académica</h3>
            <ul>
              <li>
                <strong>Tecnicatura Superior en Desarrollo de Software.</strong>{" "}
                Instituto de Formación Técnica Superior N.º 29 de la Ciudad
                Autónoma de Buenos Aires. 2023 – presente (en curso).
              </li>
              <li>
                <strong>Técnico en Computación.</strong> Escuela Técnica Nº 3
                Maria Sánchez de Thompson, Ciudad Autónoma de Buenos Aires. 1992
                – 1998.
              </li>
              <li>
                <strong>Licenciado en Sociología.</strong> Facultad de Ciencias
                Sociales, Universidad de Buenos Aires. 2002 – 2007.
              </li>
              <li>
                <strong>
                  Profesor de Enseñanza Secundaria, Normal y Especial en
                  Sociología.
                </strong>{" "}
                Facultad de Ciencias Sociales, Universidad de Buenos Aires. 2007
                – 2009.
              </li>
              <li>
                <strong>
                  Especialista Docente de Nivel Superior en Educación Sexual
                  Integral.
                </strong>{" "}
                Instituto Superior del Profesorado Dr. Joaquín V. González. 2017
                – 2019.
              </li>
            </ul>
          </section>
          <section>
            <h3>Cursos</h3>
            <ul>
              <li>
                <strong>Desarrollador Web Full Stack.</strong> Argentina
                Programa v3.0, Instituto Nacional de Tecnología Industrial
                (INTI) , Ministerio de Economía de la Nación, 2022-2023.
              </li>
              <li>
                <strong>Codo a Codo 4.0 Full Stack JAVA</strong>, Ministerio de
                Educación de la CABA, 2022.
              </li>
              <li>
                <strong>Responsive Web Design</strong>, freeCodeCamp.org, 2022.
              </li>
              <li>
                <strong>JavaScript Algorithms and Data Structures</strong>,
                freeCodeCamp.org, 2022.
              </li>
              <li>
                <strong>Back End Development and APIs</strong>,
                freeCodeCamp.org, 2022.
              </li>
            </ul>
          </section>
          <section>
            <h3>Experiencia Laboral</h3>
            <p>
              {" "}
              <strong>Programador. CompuHotel S.A. </strong> 1998 – 2002.
            </p>
            <ul>
              <li>
                Desarrollo de software de administración hotelera utilizando
                Visual Basic, Visual Fox Pro, y bases de datos SQL.
              </li>
              <li>
                Diseño y desarrollo de páginas web utilizando HTML, CSS y
                JavaScript.
              </li>
            </ul>
            <p>
              <strong>
                Sociólogo. Departamento de Salud Ambiental, Ministerio de Salud
                del GCABA.
              </strong>{" "}
              2008 – 2012.
            </p>
            <ul>
              <li>
                Desarrollo e implementación de instrumentos para el relevamiento
                de problemáticas ambientales en los Centros de Salud y Acción
                Comunitaria de la CABA. Capacitación del personal para su
                utilización.
              </li>
              <li>
                Análisis de datos socio-ambientales con Epi Info, bases de datos
                y SPSS.
              </li>
            </ul>
            <p>
              <strong>
                Profesor y tutor universitario. Universidad de Buenos Aires.
              </strong>{" "}
              2007 – 2015.
            </p>
            <ul>
              <li>
                Profesor de Introducción al Pensamiento Científico, Ciclo Básico
                Común, cátedra Marqués. 2007-2011.
              </li>
              <li>
                Profesor y tutor de Prácticas de la enseñanza. Facultad de
                Ciencias Sociales, cátedra Pipkin. 2009-2015.
              </li>
            </ul>
            <p>
              <strong>Profesor de enseñanza media. </strong> 2010 – 2022.
            </p>
            <ul>
              <li>
                Profesor de Sociología, Introducción a las Ciencias Sociales y a
                las Humanidades, Formación Ética y Ciudadana, e Historia, en
                escuelas públicas de enseñanza media de la Ciudad Autónoma de
                Buenos Aires.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className={proyectos.divider}>
        <Image src={herb} alt="herb emoji" width={26} quality={100} />
      </div>
    </div>
  );
}
