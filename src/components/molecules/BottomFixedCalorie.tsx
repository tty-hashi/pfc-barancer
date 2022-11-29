import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

import CardFooter from "./CardFooter";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import useCalculateInCart from "../../hooks/useCalculateInCart";
import { useRecoilValue } from "recoil";
import { userIdState } from "../recoil/states";

const BottomFixedCalorie = () => {
  const [protein, fat, carbo, calorie] = useCalculateInCart();
  const uid = useRecoilValue(userIdState);

  return (
    <Box position="fixed" bottom="0" left="0" w="100%" bg="#fff" zIndex='sticky' boxShadow=' 0 0 3px #eee'>
      <Box margin="0 auto" py={{ base: 2, md: 4 }} maxW="700px" display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <Text textAlign="center">{calorie}kcal</Text>
          <CardFooter goodsProtein={protein} goodsFat={fat} goodsCarbo={carbo} />
        </Box>
        {uid && (
          <Box>
            <ButtonSquare>
              <Link href="/today-eat-menu">カートへ</Link>
            </ButtonSquare>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BottomFixedCalorie;
