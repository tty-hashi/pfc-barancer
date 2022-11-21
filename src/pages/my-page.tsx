import React from "react";
import { Box } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../components/molecules/PageLayout";
import CardGridMyPage from "../components/templates/CardGridMyPage";
import { useRecoilValue } from "recoil";
import { userIdState } from "../components/recoil/states";

const Mypage = () => {
  const uid = useRecoilValue(userIdState);

  return (
    <PageLayout heading="My Page" icon={faUser}>
      <Box my="20">
        <CardGridMyPage uid={uid} />
      </Box>
    </PageLayout>
  );
};

export default Mypage;
