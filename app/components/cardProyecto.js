import cardP from "./cardProyecto.module.css";
import proyectos from "../proyectos/proyectos.module.css";
import "@app/globals.css";
import Image from "next/image";
export default function CardProyecto({
  children,
  Reverse,
  imagen,
  titulo,
  descripcion,
}) {
  let card_position = `${cardP.card__forward}`;

/*   if (Reverse===true) {
    card_position = `${cardP.card__reverse}`;
  }
 */
  return (
    <>
      <div className={`${cardP.card__container} ${card_position}`}>
        {/*  <div className={`${cardP.card__image} ${card_position}`}>
          <Image src={imagen} alt="screenshot" width={300} quality={100} />
        </div> */}

        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <div className={`${cardP.button__container} ${card_position}`}>
          <button className={cardP.button_ver}>Ver &raquo;</button>
        </div>

        {children}
      </div>
    </>
  );
}
