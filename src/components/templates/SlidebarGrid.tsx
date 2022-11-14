import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import LayoutContainer from "../atoms/LayoutContainer";
import SlideBarCarbo from "../atoms/SlideBarCarbo";
import SlideBarFat from "../atoms/SlideBarFat";
import SlideBarProtein from "../atoms/SlideBarProtein";
import SlideBarGroup from "../oganisms/SlideBarGroup";

const SlidebarGrid = () => {
  return (
    <LayoutContainer>
      <Grid templateColumns="repeat(3,1fr)" gap={6} my={{ base: 8, md: 12 }}>
        <GridItem>
          <SlideBarGroup cercleInnerText="P" title="タンパク質" slideBar={<SlideBarProtein />} />
        </GridItem>
        <GridItem>
          <SlideBarGroup cercleInnerText="F" title="脂質" slideBar={<SlideBarFat />} />
        </GridItem>
        <GridItem>
          <SlideBarGroup cercleInnerText="C" title="炭水化物" slideBar={<SlideBarCarbo />} />
        </GridItem>
      </Grid>
    </LayoutContainer>
  );
};

export default SlidebarGrid;
