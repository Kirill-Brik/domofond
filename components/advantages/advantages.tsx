import Image from "next/image";

import { IAdvantageItem } from "../../utils/interfaces";

import styles from "./advantages.module.scss";

export default function Advantages() {
  const advantages: Array<IAdvantageItem> = [
    { icon: "construction", text: "Наличие оборудования и своей спецтехники" },
    { icon: "emoji_events", text: "Большой опыт работы в сфере ЖКХ" },
    {
      icon: "published_with_changes",
      text: "Оперативная реакция на заявки от жителей",
    },
    { icon: "task", text: "Прозрачность в отчетности" },
  ];

  return (
    <section className={styles.container}>
      <article className={styles.header}>
        <h1 className={styles.title}>Мы работаем для вашего уюта.</h1>
        <p className={styles.description}>
          Основной задачей компании является благополучие вверенного объекта
          недвижимости.
        </p>
      </article>
      <article className={styles.listContainer}>
        <h2 className={styles.subtitle}>Наши преимущества</h2>
        <ul className={styles.list}>
          {advantages.map((item, index) => (
            <li className={styles.item} key={index}>
              <span className={styles.itemIcon + " " + "material-icons"}>
                {item.icon}
              </span>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </article>
      <div className={styles.image}>
        <Image
          src="/home.png"
          width={565.54}
          height={430}
          layout="responsive"
        />
      </div>
    </section>
  );
}
