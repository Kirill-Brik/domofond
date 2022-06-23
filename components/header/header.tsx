import Image from "next/image";
import Link from "../link/link";
import ItemIcon from "../itemIcon/itemIcon";
import { ILink } from "../../utils/interfaces";

import styles from "./header.module.scss";

export default function Header() {
  const links: Array<ILink> = [
    { content: "Главная", url: "/" },
    { content: "О компании", url: "/about" },
    { content: "Наши дома", url: "/homes" },
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
              <Link url={link.url} content={link.content} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.phone}>
        <ItemIcon
          icon="phone_in_talk"
          title="8 (903) 845-10-13"
          subtitle="Ежедневно с 9:00 до 20:00"
        />
      </div>
    </header>
  );
}
