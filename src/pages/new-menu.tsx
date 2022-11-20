import React from "react";
import { Box } from "@chakra-ui/react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../components/molecules/PageLayout";
import SlidebarGrid from "../components/templates/SlidebarGrid";
import CardGridMyPage from "../components/templates/CardGridMyPage";
import ButtonGoodThumb from "../components/atoms/buttons/ButtonGoodThumb";
import ButtonHeart from "../components/atoms/buttons/ButtonHeart";

const NewMenu = () => {
  return (
    <PageLayout heading="New Menu" icon={faUtensils}>
      <Box>
        <SlidebarGrid />
      </Box>
      <Box>
        <CardGridMyPage cercleOrangeButtonLeft={<ButtonGoodThumb />} cercleOrangeButtonRight={<ButtonHeart />} />
      </Box>
    </PageLayout>
  );
};

export default NewMenu;
