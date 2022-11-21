import React from "react";
import { useSetRecoilState } from "recoil";
import { collection, getDocs, query } from "firebase/firestore";

import { GoodsList } from "../components/recoil/states";
import { db } from "../firebaseSettings/firebase";

export type Menus = {
  id: string;
  uid: string;
  menuDetail: GoodsList[];
  menuName: string;
  createAt: string;
};

export const useMenuFomat = () => {
  return <div>useMenuFomat</div>;
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
/**
 * ログインユーザー uid を元にの登録した献立を取得して、menuName及び、PFCとカロリーの合算した値を成形して返す。
 * @param menus firebase から取得した menu の配列
 * @param uid ログイン userId
 * @returns 成形したオブジェクトの配列
 */
export const filterAndCalculateMenus = (
  menus: Menus[],
  uid: string
): {
  menuName: string;
  protein: number;
  fat: number;
  carbo: number;
  calorie: number;
}[] => {
  // ログインユーザー uid を元にの登録した献立を取得
  const myMenus: Menus[] = menus.filter((menu) => menu.uid === uid);
  // 献立の中を合算して配列に成形する
  const aaa = myMenus.map((myMenu) => {
    let protein: number = 0;
    let fat: number = 0;
    let carbo: number = 0;
    let calorie: number = 0;
    const menuName: string = myMenu.menuName;
    myMenu.menuDetail.forEach(({ goodsProtein, goodsFat, goodsCarbo, goodsCalorie }) => {
      const toNumberAndFloor = (item: string) => Math.floor(Number(item));
      protein += toNumberAndFloor(goodsProtein);
      fat += toNumberAndFloor(goodsFat);
      carbo += toNumberAndFloor(goodsCarbo);
      calorie += toNumberAndFloor(goodsCalorie);
    });
    return { menuName, protein, fat, carbo, calorie };
  });
  return aaa;
};
