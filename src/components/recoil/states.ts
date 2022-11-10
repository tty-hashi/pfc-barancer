import { atom } from "recoil";
type GoodsList = {
  goodsUrl: string;
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
  goodsCalorie: string;
  goodsValue: string;
  goodsTitle: string;
};

export const goodsList = atom<GoodsList[]>({
  key: "goodsList", //一意の値
  default: [], //初期値
});
