import NextLink from "next/link";

import { ILink } from "../../utils/interfaces";

import styles from "./link.module.scss";

export default function Link({ href, content }: ILink) {
  return (
    <>
      <NextLink href={href} passHref>
        <a className={styles.container} data-text={content}>
          {content}
        </a>
      </NextLink>
    </>
  );
}
