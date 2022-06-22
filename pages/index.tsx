import Advantages from "../components/advantages/advantages";
import HomeSwiper from "../components/homeSwiper/homeSwiper";

import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Advantages />
      <HomeSwiper />
    </>
  );
};

export default Home;
