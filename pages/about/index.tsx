import Head from "next/head";
import type { NextPage } from "next";
import AboutCompany from "../../components/aboutCompany/aboutCompany";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>О компании</title>
      </Head>
      <AboutCompany />
    </>
  );
};

export default Index;
