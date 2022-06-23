import Link from "next/link";

import Card from "../card/card";
import ButtonIcon from "../buttonIcon/buttonIcon";

import { IHome } from "../../utils/interfaces";

import styles from "./cardHome.module.scss";

export default function CardHome({ address, contract, reports }: IHome) {
  return (
    <Card className={styles.container}>
      <h3 className={styles.address}>{address}</h3>
      <div className={styles.contract}>
        <ButtonIcon type="link" url={contract} icon="assignment" />
        <span className={styles.contractText}>Договор управления</span>
      </div>
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
