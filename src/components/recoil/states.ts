import { atom } from "recoil";
export type GoodsList = {
  id: string;
  goodsUrl: string;
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
  goodsCalorie: string;
  goodsValue: string;
  goodsTitle: string;
};

export const goodsList = atom<GoodsList[]>({
  key: "goodsListState", //一意の値
  default: [], //初期値
});
