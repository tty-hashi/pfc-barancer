import React from "react";
import { Box, Modal, useDisclosure, Image } from "@chakra-ui/react";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";
import ModalGoodsDateil from "../atoms/ModalGoodsDateil";
import { useRecoilValue } from "recoil";
import { userIdState } from "../recoil/states";

type Props = {
  cercleOrangeButton: React.ReactNode;
  goodsId: string;
  goodsUrl: string;
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
  goodsCalorie: string;
  goodsValue: string;
  goodsTitle: string;
  goodsAllData: string;
  goodsCategory: string;
};

const Card: React.FC<Props> = (props) => {
  const { cercleOrangeButton, goodsId, goodsUrl, goodsCarbo, goodsFat, goodsProtein, goodsCalorie, goodsValue, goodsTitle, goodsAllData, goodsCategory } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = useRecoilValue(userIdState);
  const aaa: string = "rice";
  const cartImage: () => string = () => {
    switch (goodsCategory) {
      case "noodle":
        return "/noodle.svg";
      case "meat":
        return "/meat-orange.svg";
      case "bread":
        return "/bread.svg";
      case "onigiri":
        return "/onigiri.svg";
      case "bento":
        return "/bento.svg";
      case "pasta":
        return "/pasta.svg";
      case "salad":
        return "/salad.svg";
      default:
        return "/lunch.svg";
    }
  };

  return (
    <Box bg="#fff" py={{ base: 2, md: 4 }} h="100%" px={2}>
      <CardHead goodsTitle={goodsTitle} goodsCalorie={goodsCalorie} />
      <Box maxW="60%" mx="auto" my={{ base: 4, md: 6 }} onClick={onOpen} position="relative" _hover={{ cursor: "pointer" }}>
        <Image src={cartImage()} alt="商品アイコン" />
      </Box>
      {userId && (
        <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content">
          {cercleOrangeButton}
        </Box>
      )}
      <Box>
        <CardFooter goodsCarbo={goodsCarbo} goodsFat={goodsFat} goodsProtein={goodsProtein} />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalGoodsDateil goodsId={goodsId} goodsUrl={goodsUrl} goodsCarbo={goodsCarbo} goodsFat={goodsFat} goodsProtein={goodsProtein} goodsCalorie={goodsCalorie} goodsValue={goodsValue} goodsTitle={goodsTitle} goodsAllData={goodsAllData} onClose={onClose} />
      </Modal>
    </Box>
  );
};

export default Card;
