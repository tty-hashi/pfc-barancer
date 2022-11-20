import React from "react";
import { Box } from "@chakra-ui/react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonHeart = () => {
  return (
    <Box w="35px">
      <FontAwesomeIcon icon={faHeart} />
    </Box>
  );
};

export default ButtonHeart;
