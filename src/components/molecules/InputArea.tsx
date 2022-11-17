import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import InputText from "../atoms/InputText";

const InputArea = () => {
  const marginRight = { base: "0", md: "10" };
  return (
    <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "flex-end", md: "start" }}>
      <Box flex={{ base: "none", md: "1" }} mb={{ base: 6, md: 0 }} mr={marginRight} w={{ base: "100%", md: "auto" }} h="60px">
        <InputText />
      </Box>
      <Box>
        <ButtonSquare>マイリストに追加</ButtonSquare>
      </Box>
    </Flex>
  );
};

export default InputArea;
