import React from "react";
import { Box } from "@chakra-ui/react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonGoodThumb = () => {
  return (
    <Box w="35px">
      <FontAwesomeIcon icon={faThumbsUp} />
    </Box>
  );
};

export default ButtonGoodThumb;
