import { Box } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconDefinition;
  onClick: () => void;
};

const ButtonCercleOrange: React.FC<Props> = (props) => {
  const { icon, onClick } = props;
  const cercleSize = { base: "30px", md: "40px" };
  return (
    <Box onClick={onClick} display="grid" placeItems="center" h={cercleSize} w={cercleSize} background="brand.action" borderRadius="50%" transitionDuration="0.5s" transitionProperty="opacity" _hover={{ cursor: "pointer", opacity: "0.7" }}>
      <Box width={{ base: "15px", md: "20px" }}>
        <FontAwesomeIcon icon={icon} color="#fff" />
      </Box>
    </Box>
  );
};

export default ButtonCercleOrange;
