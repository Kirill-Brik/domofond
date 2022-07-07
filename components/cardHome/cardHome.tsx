import Link from "next/link";

import Card from "../card/card";
import CustomLink from "../link/link";

import styles from "./cardHome.module.scss";

export default function CardHome({
  address,
  contract,
  reports,
  className,
  downloadHandler,
}: any) {
  return (
    <Card className={styles.container + " " + className}>
      <h3 className={styles.address}>{address}</h3>
      {contract && (
        <CustomLink
          className={styles.contract}
          url={contract}
          text="Договор управления"
          icon="assignment"
          textSyze="small"
          downloadHandler={downloadHandler}
        />
      )}
      <ul className={styles.reportList}>
        {reports &&
          reports.map(({ link, name }: any) => (
            <li key={link}>
              <Link href={link} passHref>
                <a onClick={downloadHandler} className={styles.reportLink}>
                  Отчет за {name} год{" "}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Card>
  );
}
