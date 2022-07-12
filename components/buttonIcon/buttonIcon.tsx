import Link from "next/link";
import { MouseEventHandler } from "react";
import { Url } from "url";

import styles from "./buttonIcon.module.scss";

export interface IButtonIcon {
  readonly type: "button" | "link";
  readonly icon: string;
  readonly url?: Url | string;
  readonly className?: string;
  readonly downloadHandler?: MouseEventHandler;
}

const ButtonIcon = ({
  type,
  icon,
  url,
  className,
  downloadHandler,
}: IButtonIcon) => {
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
};

export default ButtonIcon;
