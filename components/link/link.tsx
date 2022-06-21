import NextLink from "next/link";

import styles from "./link.module.scss";

export interface ILink {
  readonly href: string;
  readonly content: string;
}

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
