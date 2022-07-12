import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import CardHome from "../../components/cardHome/cardHome";
import { IHome } from "../../utils/interfaces";
import { getHomeData } from "../../utils/utils";

import styles from "./index.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  let homeList = await getHomeData();
  return {
    props: { homeList },
  };
};

const Index: NextPage = ({
  homeList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Наши дома</title>
      </Head>
      <section className={styles.container}>
        <ul className={styles.homeList}>
          {homeList.map((homeData: IHome, index: number) => (
            <li key={index}>
              <CardHome home={homeData}></CardHome>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Index;
