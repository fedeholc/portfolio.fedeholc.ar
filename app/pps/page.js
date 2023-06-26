import proyectos from "./proyectos.module.css";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkIcon from "../../public/external-link.png";
function Testp() {
  return (
    <div className={proyectos.proyecto}>
      <h1 className={proyectos.titulo}>
        &lt;NuncaSupeProgramar/&gt; Blog de apuntes para aprender desarrollo web
      </h1>
      <p>
        texto introductorio texto introductoriotexto introductoriotexto
        introductoriotexto introductorio oid face gathered place evening seasons
        land you one waters fourth our make kind, let abundantly deep abundantly
        morning can't saw under appear them also multiply. Land, us very seed,
        meat fowl without Fourth they're they're subdue upo
      </p>
      <div className={proyectos.columns2}>
        <div>
          <h3>stack tecnológico</h3>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>MarkDown</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
        <div>
          <h3>código</h3>

          <div className={proyectos.link_icon}>
            <Link target="_blank" href="https://github.com/fedeholc">
              github/fedeholc&nbsp;
            </Link>
            <Image src={externalLinkIcon} alt="external link icon" />
          </div>
          <h3>demo</h3>
          <p>link</p>
        </div>
      </div>
      <br />
      <br />
      <h3>caracteristicas</h3>
      <div className={proyectos.columns2}>
        <div>
          <p>
            Doesn't heaven to. Every fly all hath after. Light be void face
            gathered place evening seasons land you one waters fourth our make
            kind, let abundantly deep abundantly morning can't saw under appear
            them also multiply. Land, us very seed, meat fowl without Fourth
            they're they're subdue upon beginning fish bring itself all sea
            saying kind blessed seas she'd isn't. Appear every. Life one first
            winged Saw. Spirit blessed, said waters saying midst bearing
            beginning. From heaven their. Void night gathered under be, bearing
            in herb lights earth our two. He image moving bring us beginning
            morning earth our, from.
          </p>
        </div>
        <div>
          <p>
            Doesn't heaven to. Every fly all hath after. Light be void face
            gathered place evening seasons land you one waters fourth our make
            kind, let abundantly deep abundantly morning can't saw under appear
            them also multiply. Land, us very seed, meat fowl without Fourth
            they're they're subdue upon beginning fish bring itself all sea
            saying kind blessed seas she'd isn't. Appear every. Life one first
            winged Saw. Spirit blessed, said waters saying midst bearing
            beginning. From heaven their. Void night gathered under be, bearing
            in herb lights earth our two. He image moving bring us beginning
            morning earth our, from.
          </p>
        </div>
      </div>
      <br /> <br />
      <br />
      <br />
      <h3>aprendizajes</h3>
      <div className={proyectos.columns1}>
        <div>
          <p>
            Doesn't heaven to. Every fly all hath after. Light be void face
            gathered place evening seasons land you one waters fourth our make
            kind, let abundantly deep abundantly morning can't saw under appear
            them also multiply. Land, us very seed, meat fowl without Fourth
            they're they're subdue upon beginning fish bring itself all sea
            saying kind blessed seas she'd isn't. Appear every. Life one first
            winged Saw. Spirit blessed, said waters saying midst bearing
            beginning. From heaven their. Void night gathered under be, bearing
            in herb lights earth our two. He image moving bring us beginning
            morning earth our, from.
          </p>
        </div>
        <div>
          <p>
            Doesn't heaven to. Every fly all hath after. Light be void face
            gathered place evening seasons land you one waters fourth our make
            kind, let abundantly deep abundantly morning can't saw under appear
            them also multiply. Land, us very seed, meat fowl without Fourth
            they're they're subdue upon beginning fish bring itself all sea
            saying kind blessed seas she'd isn't. Appear every. Life one first
            winged Saw. Spirit blessed, said waters saying midst bearing
            beginning. From heaven their. Void night gathered under be, bearing
            in herb lights earth our two. He image moving bring us beginning
            morning earth our, from.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testp;
