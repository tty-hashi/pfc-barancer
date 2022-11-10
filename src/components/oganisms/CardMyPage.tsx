import React from "react";
import { Box, Text } from "@chakra-ui/react";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";

type Props = {
  cercleOrangeButtonLeft: React.ReactNode;
  cercleOrangeButtonRight: React.ReactNode;
};

const CardMyPage: React.FC<Props> = (props) => {
  const { cercleOrangeButtonLeft, cercleOrangeButtonRight } = props;
  return (
    <Box bg="#eee" py={{ base: 2, md: 4 }} px={2}>
      <Box>
        <CardHead />
        <Box mx="4" my={{ base: 4, md: 6 }}>
          <Text fontSize="md" mb="4">
            商品のタイトルが入ります
          </Text>
          <Text fontSize="md" mb="4">
            商品のタイトルが入ります
          </Text>
          <Text fontSize="md" mb="4">
            商品のタイトルが入ります
          </Text>
          <Text fontSize="md" mb="4">
            商品のタイトルが入ります
          </Text>
        </Box>
        <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content" display="flex">
          <Box mr={4}>{cercleOrangeButtonLeft}</Box>
          {cercleOrangeButtonRight}
        </Box>
      </Box>
      <Box>
        <CardFooter />
      </Box>
    </Box>
  );
};

export default CardMyPage;
