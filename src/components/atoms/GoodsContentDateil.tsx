import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const GoodsContentDateil: React.FC<Props> = (props) => {
  const { children } = props;
  const fontSize = { base: "sm", md: "md" };

  return <Text fontSize={fontSize}>{children}</Text>;
};

export default GoodsContentDateil;
