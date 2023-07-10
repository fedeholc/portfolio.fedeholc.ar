import cardP from "./cardProyecto.module.css";
import proyectos from "../proyectos/proyectos.module.css";
import "@app/globals.css";

export default function CardProyecto({ children }) {
  return (
    <>
      <div className={cardP.card__container}>a {children}</div>
    </>
  );
}
