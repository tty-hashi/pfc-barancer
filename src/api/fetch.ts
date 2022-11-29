import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebaseSettings/firebase";

export const goodsFetch = async () => {
  const goods = query(collection(db, "goods"));
  const querySnapshot = await getDocs(goods);
  let goodsList = [];
  querySnapshot.forEach((doc) => {
    goodsList.push({
      id: doc.id,
      goodsTitle: doc.data().goodsTitle,
      goodsValue: doc.data().goodsValue,
      goodsCalorie: Math.floor(doc.data().goodsCalorie),
      goodsProtein: Math.floor(doc.data().goodsProtein),
      goodsFat: Math.floor(doc.data().goodsFat),
      goodsCarbo: Math.floor(doc.data().goodsCarbo),
      goodsUrl: doc.data().goodsUrl,
      goodsAllData: doc.data().goodsAllData,
      goodsCategory: doc.data().goodsCategory,
    });
  });
  return goodsList;
};

