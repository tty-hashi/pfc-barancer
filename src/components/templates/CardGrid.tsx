import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Card from "../oganisms/Card";
import { useSetRecoilState } from "recoil";
import { cart, GoodsList } from "../recoil/states";
import ButtonCercleOrangeCart from "../atoms/buttons/ButtonCercleOrangeCart";

type Props = {
  goodsList: GoodsList[];
  orangeButtonClickAction: string;
};

const CardGrid: React.FC<Props> = (props) => {
  const { goodsList, orangeButtonClickAction } = props;
  const setCartState = useSetRecoilState(cart);

  // カートへ商品を追加
  const goodsAddCart = (goodsId: string) => {
    setCartState((prev) => [...prev, goodsId]);
  };
  const orangeButtonClickHandler = () => {
    switch (orangeButtonClickAction) {
      case "add":
        <ButtonCercleOrangeCart
          onClick={(goodsId) => {
            goodsAddCart(goodsId);
          }}
        />;
    }
  };

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }} minH="80vh">
      {goodsList.map((goods) => (
        <GridItem key={goods.id}>
          <Card
            cercleOrangeButton={
              <ButtonCercleOrangeCart
                onClick={() => {
                  goodsAddCart(goods.id);
                }}
              />
            }
            goodsId={goods.id}
            goodsUrl={goods.goodsUrl}
            goodsCarbo={goods.goodsCarbo}
            goodsFat={goods.goodsFat}
            goodsProtein={goods.goodsProtein}
            goodsCalorie={goods.goodsCalorie}
            goodsValue={goods.goodsValue}
            goodsTitle={goods.goodsTitle}
            goodsAllData={goods.goodsAllData}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardGrid;
