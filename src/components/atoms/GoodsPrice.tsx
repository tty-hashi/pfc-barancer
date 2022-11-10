import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const GoodsPrice: React.FC<Props> = (props) => {
  const { children } = props;
  const fontSize = { base: "sm", md: "lg" };

  return (
    <Text fontSize={fontSize} fontWeight="700">
      {children}
    </Text>
  );
};

export default GoodsPrice;
