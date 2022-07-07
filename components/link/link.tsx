import NextLink from "next/link";
import ButtonIcon from "../buttonIcon/buttonIcon";

import { ILink } from "../../utils/interfaces";

import styles from "./link.module.scss";

export default function Link({
  url,
  text,
  icon,
  className,
  textSyze,
  downloadHandler,
}: any) {
  if (icon)
    return (
      <div className={styles.container + " " + className}>
        <ButtonIcon
          type="link"
          url={url}
          icon={icon}
          downloadHandler={downloadHandler}
        />
        <span
          className={
            styles.text +
            " " +
            (styles.text_size_ + textSyze || styles.text_size_medium)
          }
        >
          {text}
        </span>
      </div>
    );
  else
    return (
      <NextLink href={url} passHref>
        <a className={styles.link} data-text={text}>
          {text}
        </a>
      </NextLink>
    );
}
