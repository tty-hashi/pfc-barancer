import { collection, query, getDocs } from "firebase/firestore";
import { GoodsList } from "../components/recoil/states";
import { db } from "../firebaseSettings/firebase";
import { Menus } from "../hooks/useMenuFomat";

export const goodsFetch = async () => {
  console.log("fetch goods");
  const goods = query(collection(db, "goods"));
  const querySnapshot = await getDocs(goods);
  let goodsList = [];
  querySnapshot.forEach((doc) => {
    doc.data().goodsArray.forEach((goods, index: number) => {
      goodsList.push({
        id: index,
        goodsTitle: goods.goodsTitle,
        goodsValue: goods.goodsValue,
        goodsCalorie: Math.floor(goods.goodsCalorie),
        goodsProtein: Math.floor(goods.goodsProtein),
        goodsFat: Math.floor(goods.goodsFat),
        goodsCarbo: Math.floor(goods.goodsCarbo),
        goodsUrl: goods.goodsUrl,
        goodsAllData: goods.goodsAllData,
        goodsCategory: goods.goodsCategory,
      });
    });
  });
  return goodsList;
};

/**
 * firebase から menus の collection を取得する
 * @return {Promise<Menus[]>}
 */
export const fetchMenus: () => Promise<Menus[]> = async () => {
  console.log("fetch menu");

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
