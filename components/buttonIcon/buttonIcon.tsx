import Link from "next/link";
import { IButtonIcon } from "../../utils/interfaces";

import styles from "./buttonIcon.module.scss";

export default function ButtonIcon({
  type,
  icon,
  url,
  className,
  downloadHandler,
}: any) {
  if (type === "button")
    return (
      <button className={styles.container + " " + className || ""}>
        <span className={styles.icon + " " + "material-symbols-outlined"}>
          {icon}
        </span>
      </button>
    );
  else
    return (
      <Link href={url || "#"} passHref>
        <a
          onClick={downloadHandler}
          className={styles.container + " " + className || ""}
        >
          <span className={styles.icon + " " + "material-symbols-outlined"}>
            {icon}
          </span>
        </a>
      </Link>
    );
}
