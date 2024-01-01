import cardP from "./cardProyecto.module.css";
import "@app/globals.css";
import Link from "next/link";
export default function CardProyecto({
  children,
  buttonLink,
  titulo,
  subtitulo,
  descripcion,
}) {
  return (
    <>
      <div className={`${cardP.card__container}`}>
        <div>
          <Link href={buttonLink}>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
          </Link>
        </div>
        <p>{descripcion}</p>
        <div className={`${cardP.button__container}`}>
          <Link href={buttonLink} className={cardP.button_ver}>
            Ver &raquo;
          </Link>
        </div>

        {children}
      </div>
    </>
  );
}
