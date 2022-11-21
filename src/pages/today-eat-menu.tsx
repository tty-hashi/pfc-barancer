import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text } from "@chakra-ui/react";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import CardFooter from "../components/molecules/CardFooter";
import PageLayout from "../components/molecules/PageLayout";
import CardGrid from "../components/templates/CardGrid";
import InputArea from "../components/molecules/InputArea";
import ButtonSquare from "../components/atoms/buttons/ButtonSquare";
import useCalculateInCart from "../hooks/useCalculateInCart";

const TodayEatMenu = () => {
  const [protein, fat, carbo, calorie, cartGoodsDatail] = useCalculateInCart();
  const router = useRouter();
  // chakra レスポンシブ設定
  const initialFontSize = { base: "lg", md: "xl" };
  const initialWidth = { base: "24px", md: "30px" };
  const CardFooterGap = { base: "6", md: "10" };

  const onClickGoToHome = () => {
    router.push("/");
  };

  return (
    <PageLayout heading="Today Eat Menu" icon={faBurger}>
      <Flex alignItems="center" my={{ base: 10, md: 14 }}>
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="700">
          {`Total:${calorie} kcal`}
        </Text>
        <CardFooter initialFontSize={initialFontSize} initialWidth={initialWidth} gap={CardFooterGap} goodsCarbo={carbo} goodsFat={fat} goodsProtein={protein} />
      </Flex>
      <CardGrid isPageTop={false} goodsList={cartGoodsDatail} />
      <Box my={CardFooterGap}>
        <InputArea cartGoodsDatail={cartGoodsDatail} />
      </Box>
      <Box ml="auto" mr="0" w="fit-content">
        <ButtonSquare onClick={onClickGoToHome}>戻る</ButtonSquare>
      </Box>
    </PageLayout>
  );
};

export default TodayEatMenu;
