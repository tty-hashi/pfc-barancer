import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { GoodsList } from "../components/recoil/states";
import { db } from "../firebaseSettings/firebase";

export type Menus = {
  id: string;
  uid: string;
  menuDetail: GoodsList[];
  menuName: string;
  createAt: string;
};
export type MyMenus = {
  menuName: string;
  protein: number;
  fat: number;
  carbo: number;
  calorie: number;
  goodsDetailName: string[];
  goodsDetailId: string[];
  id: string;
};

/**
 * ログインユーザー uid を元にの登録した献立を取得して、menuName及び、PFCとカロリーの合算した値を成形して返す。
 * @param {string} menus firebase から取得したユーザーが作成した menu の配列
 * @param {string} uid ログイン userId
 * @return myMenu 成形したオブジェクトの配列
 */
export const useMenuFomat = (menus: Menus[], uid?: string): MyMenus[] => {
  // let filterMyMenus: Menus[];
  const [filterMyMenus, setFilterMyMenus] = useState<Menus[]>([]);
  // ログインユーザー uid を元にの登録した献立を取得
  useEffect(() => {
    if (uid) {
      setFilterMyMenus(menus.filter((menu) => menu.uid === uid));
    } else {
      setFilterMyMenus(menus);
    }
  }, [uid, menus]);
  // 献立の中を合算して配列に成形する
  const myMenu: MyMenus[] = filterMyMenus.map((myMenu) => {
    // const [protein, setProtein] = useState<number>(0);
    // const [fat, setFat] = useState<number>(0);
    // const [carbo, setCarbo] = useState<number>(0);
    // const [calorie, setCalorie] = useState<number>(0);

    let protein: number = 0;
    let fat: number = 0;
    let carbo: number = 0;
    let calorie: number = 0;
    let goodsDetailName: string[] = [];
    let goodsDetailId: string[] = [];
    const menuName: string = myMenu.menuName;
    const id: string = myMenu.id;
    // 献立内の各栄養素を合算
    myMenu.menuDetail.forEach(({ goodsProtein, goodsFat, goodsCarbo, goodsCalorie, goodsTitle, id }) => {
      const toNumber = (item: string) => Number(item);
      goodsDetailName.push(goodsTitle);
      goodsDetailId.push(id);
      // setProtein((prev) => prev + toNumber(goodsProtein));
      // setFat((prev) => prev + toNumber(goodsFat));
      // setCarbo((prev) => prev + toNumber(goodsCarbo));
      // setCalorie((prev) => prev + toNumber(goodsCalorie));
      protein += toNumber(goodsProtein);
      fat += toNumber(goodsFat);
      carbo += toNumber(goodsCarbo);
      calorie += toNumber(goodsCalorie);
    });
    return { menuName, protein, fat, carbo, calorie, goodsDetailName, id, goodsDetailId };
  });
  return myMenu;
};
