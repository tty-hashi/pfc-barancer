import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import InitialPFC from "../atoms/InitialPFC";

type Props = {
  pfcTitle: string;
  amountValue: string | number;
  initialFontSize?: {
    base: string;
    md: string;
  };
  initialWidth?: {
    base: string;
    md: string;
  };
};

const NutritionCapacity: React.FC<Props> = (props) => {
  const { pfcTitle, amountValue, initialFontSize = { base: "sm", md: "md" }, initialWidth = { base: "18px", md: "20px" } } = props;
  return (
    <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
      <InitialPFC width={initialWidth} fontSize={initialFontSize}>
        {pfcTitle}
      </InitialPFC>
      <Text ml={{ base: "5px" }} fontSize={initialFontSize}>
        {amountValue}
      </Text>
    </Flex>
  );
};

export default NutritionCapacity;
