import React from 'react'
import { useSetRecoilState } from 'recoil'
import { cart } from '../components/recoil/states'

/**
 * 商品のドキュメントidを取得して State へ保持
 * @param {string} goodsId 
 */
export const useGoodsAddCart = (goodsId:string) => {
  const setCartState = useSetRecoilState(cart);
  setCartState(prev => [...prev,goodsId]);
}
