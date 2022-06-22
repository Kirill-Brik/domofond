import { Swiper, SwiperSlide } from "swiper/react";
import { IHome } from "../../utils/interfaces";

import styles from "./homeSwiper.module.scss";
import "swiper/css";
import CardHome from "../cardHome/cardHome";

export default function HomeSwiper() {
  const homeList: Array<IHome> = [
    { address: "Адресс", contract: "#", reports: ["#", "#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#", "#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#"] },
  ];
  return (
    <section className={styles.container}>
      <Swiper className={styles.swiper} spaceBetween={50} slidesPerView={3}>
        {homeList.map((home, index) => (
          <SwiperSlide key={index}>
            <CardHome
              address={home.address}
              contract={home.contract}
              reports={home.reports}
            ></CardHome>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
