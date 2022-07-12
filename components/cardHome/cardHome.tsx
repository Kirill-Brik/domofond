import { getDownloadURL, ref } from "firebase/storage";
import Link from "next/link";
import { MouseEventHandler } from "react";

import storage from "../../utils/firebase";

import { IHome } from "../../utils/interfaces";

import Card from "../card/card";
import CustomLink from "../customLink/customLink";

import styles from "./cardHome.module.scss";

interface IHomeCard {
  readonly home: IHome;
  readonly className?: string;
}

const CardHome = ({ home, className }: IHomeCard) => {
  const downloadFile: MouseEventHandler = (event) => {
    const link = event.currentTarget.attributes.getNamedItem("href")?.value;
    const linkRef = ref(storage, link);
    event.preventDefault();
    getDownloadURL(linkRef).then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onprogress = (event) => {};
      xhr.onload = (event) => {
        const blob = xhr.response;
        window.open(window.URL.createObjectURL(blob), "_blank");
        window.URL.revokeObjectURL(blob);
      };
      xhr.open("GET", url);
      xhr.send();
    });
  };
  return (
    <Card className={styles.container + " " + className}>
      <h3 className={styles.address}>{home.address}</h3>
      {home.contract && (
        <CustomLink
          className={styles.contract}
          url={home.contract}
          text="Договор управления"
          icon="assignment"
          textSyze="small"
          downloadHandler={downloadFile}
        />
      )}
      <ul className={styles.reportList}>
        {home.reports &&
          home.reports.map(({ link, name }, index) => (
            <li key={index}>
              <Link href={link} passHref>
                <a onClick={downloadFile} className={styles.reportLink}>
                  Отчет за {name} год{" "}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default CardHome;
