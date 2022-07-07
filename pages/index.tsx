import Advantages from "../components/advantages/advantages";
import HomeSwiper from "../components/homeSwiper/homeSwiper";

import Head from "next/head";
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import { IHome } from "../utils/interfaces";

import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  listAll,
  ListResult,
  getBlob,
} from "firebase/storage";
import { MouseEventHandler } from "react";
import Link from "next/link";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAj4TWSKWZnlH3WRE6F-wq59xhWYWIW6s",
  authDomain: "uk-domofond.firebaseapp.com",
  projectId: "uk-domofond",
  storageBucket: "uk-domofond.appspot.com",
  messagingSenderId: "1012449446835",
  appId: "1:1012449446835:web:d2839d728e18ea0337d9c6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

export const getStaticProps: GetStaticProps = async () => {
  let homeData: Array<IHome> = [];
  let reqList: Array<Promise<ListResult>> = [];
  await listAll(ref(storage))
    .then((addressList) => {
      addressList.prefixes.forEach((address) => {
        reqList.push(listAll(ref(storage, address.fullPath)));
      });
      return Promise.all(reqList);
    })
    .then((addressList) => {
      reqList = [];
      addressList.forEach((address) => {
        address.prefixes.forEach((home) => {
          homeData.push({
            address: `ул. ${home.parent?.name}, д. ${home.name}`,
            contract: "",
            reports: [],
          });
          reqList.push(listAll(ref(storage, home.fullPath)));
        });
      });
      return Promise.all(reqList);
    })
    .then((addressList) => {
      addressList.forEach((home, index) => {
        home.items.forEach((file) => {
          const fileName = file.name.split(".")[0];
          if (fileName.toLowerCase() === "договор") {
            homeData[index].contract = file.toString();
          } else {
            homeData[index].reports.push({
              name: fileName,
              link: file.toString(),
            });
          }
        });
      });
    });
  return {
    props: { homeData },
  };
};

const Home: NextPage = ({ homeData }: any) => {
  const downloadFile: MouseEventHandler = (event) => {
    const link: any = event.currentTarget;
    const linkRef = ref(storage, link.attributes.href.value);
    event.preventDefault();
    getBlob(linkRef).then((blob) => {
      var link = window.URL.createObjectURL(blob);
      window.open(link, "_blank");
    });
  };
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Advantages />
      <HomeSwiper homeList={homeData} downloadHandler={downloadFile} />
    </>
  );
};

export default Home;
