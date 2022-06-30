import Image from "next/image";
import ButtonIcon from "../buttonIcon/buttonIcon";
import Link from "../link/link";

import { IItemNamed } from "../../utils/interfaces";

import styles from "./aboutCompany.module.scss";
import ItemNamed from "../itemNamed/itemNamed";

export default function AboutCompany() {
  const itemList: Array<IItemNamed> = [
    { name: "Руководитель:", text: "Брик Евстолия Гариевна" },
    { name: "ОГРН:", text: "1157154015700" },
    { name: "ИНН:", text: "7107107609" },
    {
      name: "Юридитеческий адрес:",
      text: "Тульская область, г. Тула, ул. Баженова, д. 7, кв.8",
    },
    { name: "Количество домов, находящихся в управлении:", text: "11" },
    { name: "Штатная численность:", text: "5" },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/analitic.png"
          width={508}
          height={481.48}
          layout="responsive"
        />
      </div>
      <ul className={styles.list}>
        {itemList.map((item, index) => (
          <li key={index}>
            <ItemNamed name={item.name} text={item.text} />
          </li>
        ))}
        <li className={styles.item}>
          <Link url="#" text="Лицензия" icon="verified_user" />
        </li>
        <li className={styles.item}>
          <Link
            url="#"
            text="Квалификационный атестат"
            icon="business_center"
          />
        </li>
      </ul>
    </section>
  );
}
