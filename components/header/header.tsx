import Image from "next/image";
import React, { MouseEventHandler, useEffect } from "react";
import CustomLink, { ICustomLink } from "../customLink/customLink";
import ItemNamed from "../itemNamed/itemNamed";

import styles from "./header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links: Array<ICustomLink> = [
    { text: "Главная", url: "/" },
    { text: "О компании", url: "/about" },
    { text: "Наши дома", url: "/homes" },
  ];

  const handleMenuButton: MouseEventHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuclick: MouseEventHandler = (event) => {
    if (event.target !== event.currentTarget) setIsMenuOpen(false);
  };

  useEffect(() => {
    const menuElement = document.querySelector(`.${styles.menuContainer}`);
    menuElement?.classList.toggle(styles.menuContainer_opened, isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src="/logo.svg" width={185} height={80} layout="intrinsic" />
      </div>
      <button onClick={handleMenuButton} className={styles.menuButton}>
        <span className={`material-symbols-outlined ${styles.menuIcon}`}>
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
      <div onClick={handleMenuclick} className={styles.menuContainer}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            {links.map((link, index) => (
              <li key={index}>
                <CustomLink url={link.url} text={link.text} />
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.phone}>
          <ItemNamed
            icon="phone_in_talk"
            text="+7 (4872) 790-451"
            name="Аварийно-диспечерская служба"
            href="tel: +7(4872)790-451"
            reversed
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
