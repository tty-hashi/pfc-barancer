import React, { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Flex, useDisclosure } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRecoilState, useRecoilValue } from "recoil";
import { TwitterIcon, TwitterShareButton } from "react-share";

import { db } from "../../firebaseSettings/firebase";
import { cart, GoodsList, userIdState } from "../recoil/states";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import InputText from "../atoms/InputText";
import { useRouter } from "next/router";
import useCalculateInCart from "../../hooks/useCalculateInCart";

type Props = {
  cartGoodsDatail: GoodsList[];
};

const InputArea: React.FC<Props> = (props) => {
  const { cartGoodsDatail } = props;
  const [protein, fat, carbo, calorie] = useCalculateInCart();
  const [inputText, setInputText] = useState<string>("");
  const [cartInGoods, setCartInGoods] = useRecoilState(cart);
  const uid = useRecoilValue(userIdState);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const marginRight = { base: "0", md: "10" };

  const firebaseAddCollection = async (uid: string) => {
    await addDoc(collection(db, "menus"), {
      menuName: inputText,
      menuDetail: cartGoodsDatail,
      createdAt: serverTimestamp(),
      uid: uid,
    })
      .then(() => {
        onOpen();
      })
      .catch((e) => {
        alert("送信に失敗しました");
        console.log(e);
      });
  };
  // menu を firebase に追加後、ダイアログを出してその中のボタンクリック時の処理
  const onClickAlertInButton: () => void = () => {
    router.push("/my-page/");
    setInputText("");
    setCartInGoods([]);
  };
  const twitterShareTitle = `今日はセブンイレブンで、タンパク質${protein}g 脂質${fat}g 糖質${carbo}gの食事をしたよ！総カロリーは${calorie}kcal！`;

  return (
    <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "flex-end", md: "start" }}>
      <Box flex={{ base: "none", md: "1" }} mb={{ base: 6, md: 0 }} mr={marginRight} w={{ base: "100%", md: "auto" }} h="60px">
        <InputText inputText={inputText} setInputText={setInputText} />
      </Box>
      <Box>
        <ButtonSquare
          disabled={inputText && cartInGoods.length !== 0 ? false : true}
          onClick={() => {
            firebaseAddCollection(uid);
          }}
        >
          マイリストに追加
        </ButtonSquare>
      </Box>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              マイリストにMenuを追加しました
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Box mr={8}>
                <TwitterShareButton url="https://pfc-barancer.vercel.app/" title={twitterShareTitle} via="" hashtags={["pfcバランス"]}>
                  <TwitterIcon size={50} round />
                </TwitterShareButton>
              </Box>
              <ButtonSquare onClick={onClickAlertInButton}>OK</ButtonSquare>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default InputArea;
