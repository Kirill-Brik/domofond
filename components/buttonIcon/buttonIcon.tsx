import Link from "next/link";

import { IButtonIcon } from "../../utils/interfaces";

import styles from "./buttonIcon.module.scss";

export default function ButtonIcon({
  type,
  icon,
  url,
  className,
}: IButtonIcon) {
  if (type === "button")
    return (
      <button className={styles.container + " " + className || ""}>
        <span className={styles.icon + " " + "material-icons"}>{icon}</span>
      </button>
    );
  else
    return (
      <Link href={url || "#"} passHref>
        <a className={styles.container + " " + className || ""}>
          <span className={styles.icon + " " + "material-icons"}>{icon}</span>
        </a>
      </Link>
    );
}
