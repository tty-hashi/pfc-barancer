import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutContainer: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Box maxW="850px" mx="auto" px={{ base: "10px", md: "10" }}>
      {children}
    </Box>
  );
};

export default LayoutContainer;
