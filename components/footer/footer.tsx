import CustomLink from "../customLink/customLink";
import ItemNamed from "../itemNamed/itemNamed";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <CustomLink url="#" text="Лицензия" icon="verified_user" />
        <ul className={styles.list}>
          <li>
            <ItemNamed
              icon="phone_in_talk"
              text="+7 (4872) 412-451"
              name="Контактный телефон:"
              href="tel: +7(4872)412-451"
            />
          </li>
          <li>
            <ItemNamed
              icon="mail"
              text="roman.brik@yandex.ru"
              name="Почта:"
              href="mailto: roman.brik@yandex.ru"
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
      </div>
      <p className={styles.copyright}>
        © uk-domofomd.ru, 2022 | ООО УК “Домофонд”
      </p>
    </footer>
  );
};

export default Footer;
