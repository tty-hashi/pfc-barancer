import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CardFooter from "./CardFooter";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import Link from "next/link";
import useCalculateInCart from "../../hooks/useCalculateInCart";

const BottomFixedCalorie = () => {
  const [protein, fat, carbo, calorie] = useCalculateInCart();

  return (
    <Box position="fixed" bottom="0" left="0" w="100%" bg="#fff">
      <Box margin="0 auto" py={{ base: 2, md: 4 }} maxW="700px" display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <Text textAlign="center">{calorie}kcal</Text>
          <CardFooter goodsProtein={protein} goodsFat={fat} goodsCarbo={carbo} />
        </Box>
        <Box>
          <ButtonSquare>
            <Link href="/today-eat-menu">カートへ</Link>
          </ButtonSquare>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomFixedCalorie;
