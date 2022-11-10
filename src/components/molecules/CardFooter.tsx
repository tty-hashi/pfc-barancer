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
};

const CardFooter: React.FC<Props> = (props) => {
  const { initialFontSize, initialWidth, gap = { base: "5px", md: 2 } } = props;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={gap} maxW={{ base: "200px", md: "auto" }} mx="auto">
      <GridItem>
        <NutritionCapacity pfcTitle="P" amountValue="111" initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
      <GridItem>
        <NutritionCapacity pfcTitle="F" amountValue="111" initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
      <GridItem>
        <NutritionCapacity pfcTitle="C" amountValue="111" initialFontSize={initialFontSize} initialWidth={initialWidth} />
      </GridItem>
    </Grid>
  );
};

export default CardFooter;
