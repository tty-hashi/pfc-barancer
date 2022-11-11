import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { goodsList } from "../recoil/states";

const CardHead = () => {
  const fontSize = { base: "xs", md: "sm" };
  const goodsListState = useRecoilValue(goodsList);
  console.log(goodsListState);

  return (
    <Flex justifyContent="space-between">
      <Heading as="h3" fontSize={fontSize}>
        商品名
      </Heading>
      <Text fontSize={fontSize} fontWeight={700}>
        〇〇○○kcal
      </Text>
    </Flex>
  );
};

export default CardHead;
