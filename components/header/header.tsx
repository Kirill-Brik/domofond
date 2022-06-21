import Image from "next/image";
import Link, { ILink } from "../link/link";
import ItemIcon from "../itemIcon/itemIcon";

import styles from "./header.module.scss";

export default function Header() {
  const links: Array<ILink> = [
    { content: "Главная", href: "/" },
    { content: "О компании", href: "/about" },
    { content: "Наши дома", href: "/homes" },
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
              <Link href={link.href} content={link.content} />
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
