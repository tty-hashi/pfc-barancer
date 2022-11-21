import React from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import ButtonCercleOrange from "./ButtonCercleOrange";
import { useSetRecoilState } from "recoil";
import { cart } from "../../recoil/states";
import { useRouter } from "next/router";

type Props = {
  goodsDetailId: string[];
  menuName: string;
};

const ButtonCercleOrangeEditting: React.FC<Props> = (props) => {
  const { goodsDetailId, menuName } = props;
  const setGoodsInCart = useSetRecoilState(cart);
  const router = useRouter();

  /**
   * Mymenu の中の商品の id を配列で cart の state へ渡し、top へ遷移する
   * @return {void}
   */
  const editingMymenu: () => void = () => {
    if (!confirm(`${menuName}を元に新たなメニューを作成します。`)) return;
    setGoodsInCart(goodsDetailId);
    router.push("/");
  };
  return <ButtonCercleOrange icon={faPenToSquare} onClick={editingMymenu} />;
};

export default ButtonCercleOrangeEditting;
