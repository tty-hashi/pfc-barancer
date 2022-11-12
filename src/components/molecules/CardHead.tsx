import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

type Props = {
  goodsTitle: string;
  goodsCalorie: string;
};

const CardHead: React.FC<Props> = (props) => {
  const { goodsTitle, goodsCalorie } = props;
  const fontSize = { base: "xs", md: "sm" };

  return (
    <Flex justifyContent="space-between" h="52px">
      <Heading as="h3" fontSize={fontSize} display='"-webkit-box"'>
        <WebkitBox>{goodsTitle}</WebkitBox>
      </Heading>
      <Text fontSize={fontSize} fontWeight={700}>
        {goodsCalorie}kcal
      </Text>
    </Flex>
  );
};

export default CardHead;

const WebkitBox = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
