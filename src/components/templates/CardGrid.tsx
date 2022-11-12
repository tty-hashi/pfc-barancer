import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Card from "../oganisms/Card";
import { useRecoilValue } from "recoil";
import { goodsList } from "../recoil/states";

type Props = {
  cercleOrangeButton: React.ReactNode;
};

const CardGrid: React.FC<Props> = (props) => {
  const { cercleOrangeButton } = props;
  const goodsListState = useRecoilValue(goodsList);

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      {goodsListState.map((goods) => (
        <GridItem key={goods.id}>
          <Card cercleOrangeButton={cercleOrangeButton} goodsId={goods.id} goodsUrl={goods.goodsUrl} goodsCarbo={goods.goodsCarbo} goodsFat={goods.goodsFat} goodsProtein={goods.goodsProtein} goodsCalorie={goods.goodsCalorie} goodsValue={goods.goodsValue} goodsTitle={goods.goodsTitle} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardGrid;
