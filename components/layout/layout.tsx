import styles from "./layout.module.scss";

import Header from "../header/header";
import ContactForm from "../contactForm/contactForm";
import Footer from "../footer/footer";
import { ReactNode } from "react";

export interface ILayout {
  readonly children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className={styles.root}>
        {children}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
