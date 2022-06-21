import Advantages from "../components/advantages/advantages";

import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Advantages />
    </>
  );
};

export default Home;
