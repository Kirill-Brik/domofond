import { ICard } from "../../utils/interfaces";

import styles from "./card.module.scss";

export default function Card({ children, className }: ICard) {
  return (
    <section className={styles.container + " " + (className || "")}>
      {children}
    </section>
  );
}
