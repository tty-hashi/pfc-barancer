import React from "react";
import { Box, Text } from "@chakra-ui/react";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";

type Props = {
  cercleOrangeButtonLeft: React.ReactNode;
  cercleOrangeButtonRight: React.ReactNode;
  menuName: string;
  protein: number;
  fat: number;
  carbo: number;
  calorie: number;
  titles: string[];
};

const CardMyPage: React.FC<Props> = (props) => {
  const { cercleOrangeButtonLeft, cercleOrangeButtonRight, menuName, protein, fat, carbo, calorie, titles } = props;
  return (
    <Box bg="#eee" py={{ base: 2, md: 4 }} px={2}>
      <Box>
        <CardHead goodsCalorie={calorie.toString()} goodsTitle={menuName} />
        {titles.map((title) => (
          <Box mx="4" my={{ base: 4, md: 6 }} key={title}>
            <Text fontSize="md" mb="4" overflow="hidden" sx={{ display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": "2" }}>
              {title}
            </Text>
          </Box>
        ))}
        <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content" display="flex">
          <Box mr={4}>{cercleOrangeButtonLeft}</Box>
          {cercleOrangeButtonRight}
        </Box>
      </Box>
      <Box>
        <CardFooter goodsProtein={protein} goodsFat={fat} goodsCarbo={carbo} />
      </Box>
    </Box>
  );
};

export default CardMyPage;
