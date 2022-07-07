import Link from "../link/link";
import ItemNamed from "../itemNamed/itemNamed";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link url="#" text="Лицензия" icon="verified_user" />
        </li>
        <li>
          <ItemNamed
            icon="phone_in_talk"
            text="+7 (4872) 412-451"
            name="Контактный телефон:"
          />
        </li>
        <li>
          <ItemNamed
            icon="person_pin_circle"
            text="г. Тула, ул. Баженова, д. 7, кв. 8"
            name="Адресс:"
          />
        </li>
      </ul>
      <p className={styles.copyright}>
        © nazvaniesaita.ru, 2022 | ООО УК “Домофонд”
      </p>
    </footer>
  );
}
