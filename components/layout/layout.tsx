import styles from "./layout.module.scss";

import { ILayout } from "../../utils/interfaces";

import Header from "../header/header";
import ContactForm from "../contactForm/contactForm";
import Footer from "../footer/footer";

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
