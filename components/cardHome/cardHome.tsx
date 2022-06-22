import Link from "next/link";

import Card from "../card/card";

import { IHome } from "../../utils/interfaces";

import styles from "./cardHome.module.scss";

export default function CardHome({ address, contract, reports }: IHome) {
  return (
    <Card className={styles.container}>
      <h3>{address}</h3>
      <button>{contract}</button>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <Link href={report} passHref>
              <a>Отчет</a>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
