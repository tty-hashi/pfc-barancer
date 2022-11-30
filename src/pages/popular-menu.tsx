import React from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/molecules/PageLayout";
import { Box } from "@chakra-ui/react";
import SlideBar from "../components/atoms/slideBar/SlideBar";

const PopularMenu = () => {
  return (
    <PageLayout heading="Popular Menu" icon={faThumbsUp}>
      <Box>{/* <SlideBar /> */}</Box>
      <Box></Box>
    </PageLayout>
  );
};

export default PopularMenu;
