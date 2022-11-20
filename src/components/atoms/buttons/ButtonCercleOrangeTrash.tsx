import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ButtonCercleOrange from "./ButtonCercleOrange";
import { useRecoilState } from "recoil";
import { cart } from "../../recoil/states";

type Props = {
  goodsId: string;
};

const ButtonCercleOrangeTrash: React.FC<Props> = (props) => {
  const { goodsId } = props;

  const [cartState, setCartState] = useRecoilState(cart);
  // カート内の商品を削除
  const goodsDeleteInCart = (goodsId: string) => {
    const filterCartState = cartState.filter((cartItem) => cartItem !== goodsId);
    setCartState(filterCartState);
  };

  return (
    <ButtonCercleOrange
      onClick={() => {
        goodsDeleteInCart(goodsId);
      }}
      icon={faTrash}
    />
  );
};

export default ButtonCercleOrangeTrash;
