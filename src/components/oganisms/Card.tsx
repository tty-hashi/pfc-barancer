import React from "react";
import { Box, Image, Modal, useDisclosure } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";
import ModalGoodsDateil from "../atoms/ModalGoodsDateil";

type Props = {
  cercleOrangeButton: React.ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const { cercleOrangeButton } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="#eee" py={{ base: 2, md: 4 }} px={2}>
      <Box>
        <CardHead />
        <Box maxW="60%" mx="auto" my={{ base: 4, md: 6 }} onClick={onOpen}>
          <Image src="/meat.svg" />
        </Box>
        <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content">
          {cercleOrangeButton}
        </Box>
      </Box>
      <Box>
        <CardFooter />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalGoodsDateil />
      </Modal>
    </Box>
  );
};

export default Card;
