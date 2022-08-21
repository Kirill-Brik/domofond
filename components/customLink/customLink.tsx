import NextLink from "next/link";
import { MouseEventHandler } from "react";
import { Url } from "url";
import ButtonIcon from "../buttonIcon/buttonIcon";

import styles from "./customLink.module.scss";

export interface ICustomLink {
  readonly url: Url | string;
  readonly text: string;
  readonly textSyze?: "small" | "medium";
  readonly icon?: string;
  readonly className?: string;
  readonly downloadHandler?: MouseEventHandler;
}

const CustomLink = ({
  url,
  text,
  icon,
  className,
  textSyze,
  downloadHandler,
}: ICustomLink) => {
  if (icon) {
    const containerClass = styles.container + " " + className;
    const textClass =
      styles.text +
      " " +
      (styles.text_size_ + textSyze || styles.text_size_medium);
    return (
      <div className={containerClass}>
        <ButtonIcon
          type="link"
          url={url}
          icon={icon}
          downloadHandler={downloadHandler}
        />
        <span className={textClass}>{text}</span>
      </div>
    );
  } else
    return (
      <NextLink href={url} passHref>
        <a className={styles.link} data-text={text}>
          {text}
        </a>
      </NextLink>
    );
};

export default CustomLink;
