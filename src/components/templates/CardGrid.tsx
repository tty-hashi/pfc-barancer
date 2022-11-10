import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Card from "../oganisms/Card";

type Props = {
  cercleOrangeButton: React.ReactNode;
};

const CardGrid: React.FC<Props> = (props) => {
  const { cercleOrangeButton } = props;
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      <GridItem>
        <Card cercleOrangeButton={cercleOrangeButton} />
      </GridItem>
      <GridItem>
        <Card cercleOrangeButton={cercleOrangeButton} />
      </GridItem>
      <GridItem>
        <Card cercleOrangeButton={cercleOrangeButton} />
      </GridItem>
    </Grid>
  );
};

export default CardGrid;
