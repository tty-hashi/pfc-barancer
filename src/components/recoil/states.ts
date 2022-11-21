import { atom } from "recoil";
import { Menus } from "../../hooks/useMenuFomat";
export type GoodsList = {
  id: string;
  goodsUrl: string;
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
  goodsCalorie: string;
  goodsValue: string;
  goodsTitle: string;
  goodsAllData: string;
};

export const goodsList = atom<GoodsList[]>({
  key: "goodsListState",
  default: [],
});
export const goodsListSource = atom<GoodsList[]>({
  key: "goodsListSource",
  default: [],
});
export const silderValueProtein = atom<number>({
  key: "silderValueProtein",
  default: 50,
});
export const silderValueFat = atom<number>({
  key: "silderValueaFat",
  default: 50,
});
export const silderValueCarbo = atom<number>({
  key: "silderValueCarbo",
  default: 50,
});
export const userIdState = atom<string>({
  key: "userId",
  default: "",
});
export const cart = atom<string[]>({
  key: "cart",
  default: [],
});
export const menusState = atom<Menus[]>({
  key: "menus",
  default: [],
});
