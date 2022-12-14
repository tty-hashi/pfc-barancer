import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Card from "../oganisms/Card";
import { GoodsList } from "../recoil/states";
import ButtonCercleOrangeCart from "../atoms/buttons/ButtonCercleOrangeCart";
import ButtonCercleOrangeTrash from "../atoms/buttons/ButtonCercleOrangeTrash";

type Props = {
  goodsList: GoodsList[];
  isPageTop: boolean;
};

const CardGrid: React.FC<Props> = (props) => {
  const { goodsList, isPageTop } = props;
  const goodsSlice50 = goodsList.slice(0, 50);
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      {goodsSlice50.map((goods, index) => (
        <GridItem key={`${index}${goods.goodsTitle}`}>
          <Card cercleOrangeButton={isPageTop ? <ButtonCercleOrangeCart goodsId={goods.id} /> : <ButtonCercleOrangeTrash goodsId={goods.id} />} goodsId={goods.id} goodsUrl={goods.goodsUrl} goodsCarbo={goods.goodsCarbo} goodsFat={goods.goodsFat} goodsProtein={goods.goodsProtein} goodsCalorie={goods.goodsCalorie} goodsValue={goods.goodsValue} goodsTitle={goods.goodsTitle} goodsAllData={goods.goodsAllData} goodsCategory={goods.goodsCategory} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardGrid;
