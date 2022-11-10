import React from "react";
import { Box } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../components/molecules/PageLayout";
import CardGridMyPage from "../components/templates/CardGridMyPage";
import ButtonCercleOrangeEditting from "../components/atoms/ButtonCercleOrangeEditting";
import ButtonCercleOrangeTrash from "../components/atoms/ButtonCercleOrangeTrash";

const Mypage = () => {
  return (
    <PageLayout heading="Today Menu" icon={faUser}>
      <Box my="20">
        <CardGridMyPage cercleOrangeButtonLeft={<ButtonCercleOrangeEditting />} cercleOrangeButtonRight={<ButtonCercleOrangeTrash />} />
      </Box>
    </PageLayout>
  );
};

export default Mypage;
