import NextLink from "next/link";

import { ILink } from "../../utils/interfaces";

import styles from "./link.module.scss";

export default function Link({ url, content }: ILink) {
  return (
    <>
      <NextLink href={url} passHref>
        <a className={styles.container} data-text={content}>
          {content}
        </a>
      </NextLink>
    </>
  );
}
