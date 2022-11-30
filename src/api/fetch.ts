import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebaseSettings/firebase";
import { Menus } from "../hooks/useMenuFomat";

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

/**
 * firebase から menus の collection を取得する
 * @return {Promise<Menus[]>}
 */
export const fetchMenus: () => Promise<Menus[]> = async () => {
  const menusCollection = query(collection(db, "menus"));
  const querySnapshot = await getDocs(menusCollection);
  let menus: Menus[] = [];
  querySnapshot.forEach((doc) => {
    menus.push({
      id: doc.id,
      uid: doc.data().uid,
      menuDetail: doc.data().menuDetail,
      menuName: doc.data().menuName,
      createAt: doc.data().createAt,
    });
  });
  return menus;
};
