import Image from "next/image";
import CustomLink, { ICustomLink } from "../customLink/customLink";
import ItemNamed from "../itemNamed/itemNamed";

import styles from "./header.module.scss";

const Header = () => {
  const links: Array<ICustomLink> = [
    { text: "Главная", url: "/" },
    { text: "О компании", url: "/about" },
    { text: "Наши дома", url: "/homes" },
  ];

  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        width={185}
        height={80}
        layout="fixed"
      />
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
    </header>
  );
};

export default Header;
