import React from "react";
import ButtonCercleOrange from "./ButtonCercleOrange";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { cart } from "../../recoil/states";

type Props = {
  goodsId: string;
};

const ButtonCercleOrangeCart: React.FC<Props> = (props) => {
  const { goodsId } = props;

  const setCartState = useSetRecoilState(cart);

  /**
   * 商品idを引数にして、そのidをカート内 state へ追加する
   * @param {string} goodsId 商品Id
   */
  const goodsAddCart = (goodsId: string) => {
    setCartState((prev) => [...prev, goodsId]);
  };

  return (
    <ButtonCercleOrange
      icon={faCartShopping}
      onClick={() => {
        goodsAddCart(goodsId);
      }}
    />
  );
};

export default ButtonCercleOrangeCart;
