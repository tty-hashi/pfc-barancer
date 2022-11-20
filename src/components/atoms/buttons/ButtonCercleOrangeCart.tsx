import React from "react";
import ButtonCercleOrange from "./ButtonCercleOrange";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onClick: (goodsId: string) => void;
};

const ButtonCercleOrangeCart: React.FC<Props> = (props) => {
  const { onClick } = props;
  return <ButtonCercleOrange icon={faCartShopping} onClick={onClick} />;
};

export default ButtonCercleOrangeCart;
