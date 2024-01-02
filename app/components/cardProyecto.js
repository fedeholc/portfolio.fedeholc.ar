import cardP from "./cardProyecto.module.css";
import "@app/globals.css";
import Link from "next/link";
export default function CardProyecto({
  children,
  buttonLink,
  titulo,
  subtitulo,
  descripcion,
  stack,
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
        {/*         <div className={`${cardP.tags__stack}`}>Stack</div>
         */}{" "}
        <div className={`${cardP.tags__container}`}>
          {stack?.map((item, index) => (
            <div key={index} className={`${cardP.tag}`}>
              {item}
            </div>
          ))}
        </div>
        <div className={`${cardP.button__container}`}>
          <Link href={buttonLink} className={cardP.button_ver}>
            Ver proyecto &raquo;
          </Link>
        </div>
        {children}
      </div>
    </>
  );
}
