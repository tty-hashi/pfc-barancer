import React from "react";
import { Box } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../components/molecules/PageLayout";
import CardGridMyPage from "../components/templates/CardGridMyPage";

const Mypage = () => {
  return (
    <PageLayout heading="My Page" icon={faUser}>
      <Box my="20">
        <CardGridMyPage />
      </Box>
    </PageLayout>
  );
};

export default Mypage;
