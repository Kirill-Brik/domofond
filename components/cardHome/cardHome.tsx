import Link from "next/link";

import Card from "../card/card";
import CustomLink from "../link/link";

import { IHome } from "../../utils/interfaces";

import styles from "./cardHome.module.scss";

export default function CardHome({
  address,
  contract,
  reports,
  className,
}: IHome) {
  return (
    <Card className={styles.container + " " + className}>
      <h3 className={styles.address}>{address}</h3>
      <CustomLink
        className={styles.contract}
        url={contract}
        text="Договор управления"
        icon="assignment"
        textSyze="small"
      />
      <ul className={styles.reportList}>
        {reports.map((report, index) => (
          <li key={index}>
            <Link href={report} passHref>
              <a className={styles.reportLink}>Отчет</a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
