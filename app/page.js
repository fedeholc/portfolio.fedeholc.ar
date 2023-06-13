import { archivoBlack } from "./layout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col  justify-around  ">
      <div className="h-full flex flex-col  ">
        <header className="flex items-center flex-col text-center p-4 gap-5">
          <div className="flex flex-row items-center justify-center gap-4">
            <Image
              className="fotosperfil rounded-full border-2 border-black mt-4 mb-1"
              src="/fp.jpg"
              width="150"
              height="150"
            />
            <h1>hola =)</h1>
          </div>
          <div>
            <h2 className="borde_amarillo">Sitio en construcción</h2>
          </div>
        </header>
        <section className="flex flex-col items-center mt-4 text-center">
          <h3>Mientras tanto podés encontrame en:</h3>
          <div className="flex flex-col items-start">
            <p className="mt-4 mb-1">
              ↳ Github:
              <a
                target="_blank"
                className="linktext"
                href="https://github.com/fedeholc/"
              >
                <span> github.com/fedeholc</span>
              </a>
            </p>
            <p className="mt-2 mb-1">
              ↳ LinkedIn:
              <a
                target="_blank"
                className="linktext"
                href="https://www.linkedin.com/in/federicoholc/"
              >
                <span> linkedin.com/in/federicoholc</span>
              </a>
            </p>
            <p className="mt-2 mb-1">
              ↳ Mi blog de aprendizaje:
              <a
                target="_blank"
                className="linktext"
                href="https://nsp.fedeholc.ar/"
              >
                <span> nsp.fedeholc.ar</span>
              </a>
            </p>
            <p className="mt-2 mb-1">
              ↳ O mandarme un mail a:
              <a
                target="_blank"
                className="linktext"
                href="mailto:dev@fedeholc.ar"
              >
                <span> dev@fedeholc.ar</span>
              </a>
            </p>
            <p className="mt-2 mb-1">
              ↳ También hago fotos:
              <a
                target="_blank"
                className="linktext"
                href="https://www.instagram.com/fedeholc/"
              >
                <span> instagram.com/fedeholc</span>
              </a>
            </p>
          </div>
        </section>
      </div>
      <footer>Federico Holc ⚡️ 2023</footer>
    </main>
  );
}
