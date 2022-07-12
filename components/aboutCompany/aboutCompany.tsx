import Image from "next/image";
import ItemNamed, { IItemNamed } from "../itemNamed/itemNamed";
import CustomLink from "../customLink/customLink";

import styles from "./aboutCompany.module.scss";
import Card from "../card/card";

const AboutCompany = () => {
  const aboutCompany: Array<IItemNamed> = [
    { name: "Руководитель:", text: "Брик Евстолия Гариевна" },
    { name: "ОГРН:", text: "1167154082314" },
    { name: "ИНН:", text: "7105049366" },
    {
      name: "Юридитеческий адрес:",
      text: "Тульская область, г. Тула, ул. Баженова, д. 7, кв.8",
    },
    { name: "Количество домов, находящихся в управлении:", text: "12" },
    { name: "Штатная численность:", text: "5" },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/analitic.svg"
          width={508}
          height={481.48}
          layout="responsive"
          priority
        />
      </div>
      <ul className={styles.list}>
        {aboutCompany.map((item, index) => (
          <li key={index}>
            <ItemNamed name={item.name} text={item.text} />
          </li>
        ))}
        <li className={styles.item}>
          <CustomLink url="#" text="Лицензия" icon="verified_user" />
        </li>
        <li className={styles.item}>
          <CustomLink
            url="#"
            text="Квалификационный атестат"
            icon="business_center"
          />
        </li>
      </ul>
      <ul className={styles.cardList}>
        <li>
          <Card className={styles.card + " " + styles.officeCard}>
            <div className={styles.cardTitle}>
              <span
                className={"material-symbols-outlined" + " " + styles.cardIcon}
              >
                home
              </span>
              <h3 className={styles.cardTitleText}>ЖЭУ</h3>
            </div>
            <ul className={styles.cardItems}>
              <li>
                <ItemNamed name="Телефон:" text="+7 (4872) 412-451" />
              </li>
              <ul className={styles.cardTimetable}>
                <li>
                  <ItemNamed name="Пн-Чт:" text="8:00 - 17:00" />
                </li>
                <li>
                  <ItemNamed name="Пт:" text="8:00 - 16:00" />
                </li>
                <li>
                  <ItemNamed name="Перерыв:" text="13:00 - 14:00" />
                </li>
              </ul>
            </ul>
          </Card>
        </li>
        <li>
          <Card className={styles.card + " " + styles.technicCard}>
            <div className={styles.cardTitle}>
              <span
                className={"material-symbols-outlined" + " " + styles.cardIcon}
              >
                warning
              </span>
              <h3 className={styles.cardTitleText}>
                Аварийно-диспечерская служба
              </h3>
            </div>
            <ul className={styles.cardItems}>
              <li>
                <ItemNamed name="Телефон:" text="+7 (4872) 790-451" />
              </li>
              <ul className={styles.cardTimetable}>
                <li>
                  <ItemNamed name="Пн-Вс:" text="Круглосуточно" />
                </li>
              </ul>
            </ul>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default AboutCompany;
