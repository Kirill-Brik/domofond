import Advantages from "../components/advantages/advantages";
import HomeSwiper from "../components/homeSwiper/homeSwiper";

import Head from "next/head";
import type { NextPage } from "next";

import { initializeApp } from "firebase/app";

import { IHome } from "../utils/interfaces";

const Home: NextPage = () => {
  const homeList: Array<IHome> = [
    {
      address: "Адресс",
      contract: "homes/test.pdf",
      reports: ["#", "#", "#"],
    },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#", "#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#", "#"] },
    { address: "Адресс", contract: "#", reports: ["#", "#", "#"] },
  ];
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Advantages />
      <HomeSwiper homeList={homeList} />
    </>
  );
};

export default Home;
