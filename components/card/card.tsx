import { ReactNode } from "react";

import styles from "./card.module.scss";

export interface ICard {
  readonly children: ReactNode;
  readonly className?: string;
}

const Card = ({ children, className }: ICard) => {
  return (
    <section className={styles.container + " " + (className || "")}>
      {children}
    </section>
  );
};

export default Card;
