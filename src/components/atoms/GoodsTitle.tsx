import { Text } from "@chakra-ui/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const GoodsTitle: React.FC<Props> = (props) => {
  const { children } = props;
  const fontSize = { base: "sm", md: "lg" };
  return (
    <Text fontSize={fontSize} color="#996600" fontWeight="700">
      {children}
    </Text>
  );
};

export default GoodsTitle;
