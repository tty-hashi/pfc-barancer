import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import LayoutContainer from "../atoms/LayoutContainer";
import SlideBarGroup from "../oganisms/SlideBarGroup";

const SlidebarGrid = () => {
  return (
    <LayoutContainer>
      <Grid templateColumns="repeat(3,1fr)" gap={6} my={{ base: 8, md: 12 }}>
        <GridItem>
          <SlideBarGroup cercleInnerText="P" title="タンパク質" />
        </GridItem>
        <GridItem>
          <SlideBarGroup cercleInnerText="P" title="脂質" />
        </GridItem>
        <GridItem>
          <SlideBarGroup cercleInnerText="C" title="炭水化物" />
        </GridItem>
      </Grid>
    </LayoutContainer>
  );
};

export default SlidebarGrid;
