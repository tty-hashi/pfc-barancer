import { Box, Text } from "@chakra-ui/react";
import React from "react";
import InitialPFC from "../atoms/InitialPFC";

type Props = {
  cercleInnerText: string;
  title: string;
};

const SlideBarTitle: React.FC<Props> = (props) => {
  const { cercleInnerText, title } = props;
  return (
    <>
      <Box display={"grid"} placeItems={"center"} mb={{ base: 6, md: 8 }}>
        <InitialPFC fontSize={{ base: "sm", md: "2xl" }} width={{ base: "20px", md: "40px" }}>
          {cercleInnerText}
        </InitialPFC>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight={700}>
          {title}
        </Text>
      </Box>
    </>
  );
};

export default SlideBarTitle;
