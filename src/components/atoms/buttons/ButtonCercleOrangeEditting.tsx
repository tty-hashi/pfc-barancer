import React from "react";
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import ButtonCercleOrange from "./ButtonCercleOrange";
import { useSetRecoilState } from "recoil";
import { cart } from "../../recoil/states";
import { useRouter } from "next/router";

type Props = {
  goodsDetailId: string[];
  menuName: string;
};

const ButtonCercleOrangeEditting: React.FC<Props> = (props) => {
  const { goodsDetailId, menuName } = props;
  const setGoodsInCart = useSetRecoilState(cart);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  /**
   * Mymenu の中の商品の id を配列で cart の state へ渡し、top へ遷移する
   * @return {void}
   */
  const editingMymenu: () => void = () => {
    setGoodsInCart(goodsDetailId);
    router.push("/");
    onClose();
  };
  return (
    <>
      <ButtonCercleOrange icon={faPenToSquare} onClick={onOpen} />
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {menuName}を元に新たなメニューを作成します。
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={editingMymenu} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ButtonCercleOrangeEditting;
