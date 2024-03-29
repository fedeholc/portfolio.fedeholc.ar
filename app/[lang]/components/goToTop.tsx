import Link from "next/link";

import goToTop from "./goToTop.module.css";

export default function GoToTop() {
  return (
    <button className={goToTop.goTop}>
      <Link href="/proyectos/#inicio">&#x279C;</Link>
    </button>
  );
}
