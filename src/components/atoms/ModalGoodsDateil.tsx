import React from "react";
import { Box, Flex, Image, Link, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardFooter from "../molecules/CardFooter";
import GoodsTitle from "../atoms/GoodsTitle";
import GoodsPrice from "../atoms/GoodsPrice";
import GoodsContentDateil from "../atoms/GoodsContentDateil";
import ButtonSquare from "../atoms/ButtonSquare";
import { useGoodsAddCart } from "../../hooks/useGoodsAddCart";
import { useSetRecoilState } from "recoil";
import { cart } from "../recoil/states";

type Props = {
  goodsId: string;
  goodsUrl: string;
  goodsCarbo: string;
  goodsFat: string;
  goodsProtein: string;
  goodsCalorie: string;
  goodsValue: string;
  goodsTitle: string;
  goodsAllData: string;
  onClose: () => void;
};

const ModalGoodsDateil: React.FC<Props> = (props) => {
  const { goodsId, goodsUrl, goodsCarbo, goodsFat, goodsProtein, goodsCalorie, goodsValue, goodsTitle, goodsAllData, onClose } = props;
  const { onOpen } = useDisclosure();
  // const setCartState = useSetRecoilState(cart);

  const goodsAddCart = (goodsId: string) => {
    // setCartState((prev) => [...prev, goodsId]);
    useGoodsAddCart(goodsId);
    onClose();
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <CardFooter goodsCarbo={goodsCarbo} goodsFat={goodsFat} goodsProtein={goodsProtein} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxW="60%" mx="auto" my={{ base: 4, md: 6 }} onClick={onOpen}>
            <Image src="/meat.svg" />
          </Box>
          <GoodsTitle>{goodsTitle}</GoodsTitle>
          <GoodsPrice>{goodsValue}</GoodsPrice>
          <GoodsContentDateil>{goodsAllData}</GoodsContentDateil>
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Box display="flex" alignItems="center" borderBottom="1px solid #333">
              <Link href={goodsUrl} target="_blank" mr="2">
                商品リンク
              </Link>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} width="10px" />
            </Box>
            <Spacer />
            <Box>
              <ButtonSquare
                onClick={() => {
                  goodsAddCart(goodsId);
                }}
              >
                追加
              </ButtonSquare>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default ModalGoodsDateil;
