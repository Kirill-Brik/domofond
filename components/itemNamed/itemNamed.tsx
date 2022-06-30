import { IItemNamed } from "../../utils/interfaces";

import styles from "./itemNamed.module.scss";

export default function ItemNamed({ icon, name, text, reversed }: IItemNamed) {
  return (
    <div className={styles.container}>
      {icon && (
        <span className={styles.icon + " " + "material-symbols-outlined"}>
          {icon}
        </span>
      )}
      <div
        className={styles.text + (reversed ? " " + styles.text_reversed : "")}
      >
        <span className={styles.name}>{name}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
