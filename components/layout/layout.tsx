import Header from "../header/header";
import styles from "./layout.module.scss";

import type { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className={styles.root}>{children}</main>
    </>
  );
}
