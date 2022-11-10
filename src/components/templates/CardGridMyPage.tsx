import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CardMyPage from "../oganisms/CardMyPage";
type Props = {
  cercleOrangeButtonLeft: React.ReactNode;
  cercleOrangeButtonRight: React.ReactNode;
};

const CardGridMyPage: React.FC<Props> = (props) => {
  const { cercleOrangeButtonLeft, cercleOrangeButtonRight } = props;

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
    </Grid>
  );
};

export default CardGridMyPage;
