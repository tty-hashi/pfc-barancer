import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import CardFooter from "../components/molecules/CardFooter";
import PageLayout from "../components/molecules/PageLayout";
import CardGrid from "../components/templates/CardGrid";
import InputArea from "../components/molecules/InputArea";
import ButtonSquare from "../components/atoms/buttons/ButtonSquare";
import ButtonCercleOrangeTrash from "../components/atoms/buttons/ButtonCercleOrangeTrash";

const TodayEatMenu = () => {
  const initialFontSize = { base: "lg", md: "xl" };
  const initialWidth = { base: "24px", md: "30px" };
  const CardFooterGap = { base: "6", md: "10" };
  return (
    <PageLayout heading="Today Eat Menu" icon={faBurger}>
      <Flex alignItems="center" my={{ base: 10, md: 14 }}>
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="700">
          Total: 1234 kcal
        </Text>
        <CardFooter initialFontSize={initialFontSize} initialWidth={initialWidth} gap={CardFooterGap} />
      </Flex>
      <CardGrid cercleOrangeButton={<ButtonCercleOrangeTrash />} />
      <Box my={CardFooterGap}>
        <InputArea />
      </Box>
      <Box ml="auto" mr="0" w="fit-content">
        <ButtonSquare>戻る</ButtonSquare>
      </Box>
    </PageLayout>
  );
};

export default TodayEatMenu;
