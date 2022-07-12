import { getDownloadURL, listAll, ListResult, ref } from "firebase/storage";
import { MouseEventHandler } from "react";
import storage from "./firebase";
import { IHome } from "./interfaces";

const getHomeData = async () => {
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

  return homeData;
};

export { getHomeData };
