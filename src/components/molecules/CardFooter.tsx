import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NutritionCapacity from "./NutritionCapacity";

type Props = {
  initialFontSize?: {
    base: string;
    md: string;
  };
  initialWidth?: {
    base: string;
    md: string;
  };
  gap?: {
    base: string;
    md: string;
  };
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
};

const CardFooter: React.FC<Props> = (props) => {
  const { initialFontSize, initialWidth, gap = { base: "5px", md: 2 }, goodsCarbo, goodsFat, goodsProtein } = props;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={gap} maxW={{ base: "200px", md: "auto" }} mx="auto">
      <GridItem>
        <NutritionCapacity pfcTitle="P" amountValue={goodsCarbo} initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
      <GridItem>
        <NutritionCapacity pfcTitle="F" amountValue={goodsFat} initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
      <GridItem>
        <NutritionCapacity pfcTitle="C" amountValue={goodsProtein} initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
    </Grid>
  );
};

export default CardFooter;
