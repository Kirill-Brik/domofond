import Advantages from "../components/advantages/advantages";
import HomeSwiper from "../components/homeSwiper/homeSwiper";

import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { getHomeData } from "../utils/utils";

export const getStaticProps: GetStaticProps = async () => {
  let homeData = await getHomeData();
  return {
    props: { homeData },
  };
};

const Index: NextPage = ({
  homeData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Advantages />
      <HomeSwiper homeList={homeData} />
    </>
  );
};

export default Index;
