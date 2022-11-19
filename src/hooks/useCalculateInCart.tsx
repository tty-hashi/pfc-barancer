import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cart, GoodsList, goodsList } from "../components/recoil/states";

type Nun = [number, number, number, number, GoodsList[]];

/**
 * カート内の商品のPFCとカロリーを合算してそれぞれの値を数値で返す
 * @return {number | GoodsList[][]} - [protein, fat, carbo, calorie, cartGoodsDatail]の5つを返す
 */
const useCalculateInCart = (): Nun => {
  const cartState = useRecoilValue<string[]>(cart);
  const goodsListState = useRecoilValue<GoodsList[]>(goodsList);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbo, setCarbo] = useState<number>(0);
  const [calorie, setCalorie] = useState<number>(0);
  const [cartGoodsDatail, setCartGoodsDatail] = useState([]);

  // let cartGoodsDatail;

  useEffect(() => {
    // goodsListStateからカート内の商品とgoodsIdが同じものを取得して配列に入れる
    const getDatailInCart = cartState.map((cartItemId) => {
      return goodsListState.filter((item) => item.id === cartItemId);
    });
    const FlatDatailInCart = getDatailInCart.flat();
    setCartGoodsDatail(FlatDatailInCart);

    /**
     * 型を整えてカート内のPFCを加算する関数
     * @param {number} prev 加算前の値,state の現在値
     * @param {string} item カート内のPFCの値
     * @returns number
     */
    const toNumberAndFloor = (prev: number, item: string) => Math.floor(prev + Number(item));
    // state の値をリセット
    setProtein(0);
    setFat(0);
    setCarbo(0);
    setCalorie(0);
    // カート内商品全てのPFCとカロリーを合算
    FlatDatailInCart.forEach((item: GoodsList) => {
      setProtein((prev) => toNumberAndFloor(prev, item.goodsProtein));
      setFat((prev) => toNumberAndFloor(prev, item.goodsFat));
      setCarbo((prev) => toNumberAndFloor(prev, item.goodsCarbo));
      setCalorie((prev) => toNumberAndFloor(prev, item.goodsCalorie));
    });
  }, [cartState]);

  return [protein, fat, carbo, calorie, cartGoodsDatail];
};

export default useCalculateInCart;
