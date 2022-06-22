import Header from "../header/header";

import styles from "./layout.module.scss";

import { ILayout } from "../../utils/interfaces";

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className={styles.root}>{children}</main>
    </>
  );
}
