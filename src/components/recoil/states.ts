import { atom } from "recoil";

export const goodsList = atom<any>({
  key: "goodsList", //一意の値
  default: [], //初期値
});
