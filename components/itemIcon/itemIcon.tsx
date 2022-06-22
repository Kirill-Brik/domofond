import { IItemIcon } from "../../utils/interfaces";

import styles from "./itemIcon.module.scss";

export default function ItemIcon({
  icon,
  title,
  subtitle,
  reversed,
}: IItemIcon) {
  return (
    <div className={styles.container}>
      <span className={styles.icon + " " + "material-icons"}>{icon}</span>
      <div
        className={styles.text + (reversed ? " " + styles.text_reversed : "")}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
}
