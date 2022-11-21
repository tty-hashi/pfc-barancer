import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRecoilState, useSetRecoilState } from "recoil";

import { db } from "../../firebaseSettings/firebase";
import { cart, GoodsList, userIdState } from "../recoil/states";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import InputText from "../atoms/InputText";
import { useRouter } from "next/router";

type Props = {
  cartGoodsDatail: GoodsList[];
};

const InputArea: React.FC<Props> = (props) => {
  const { cartGoodsDatail } = props;
  const [inputText, setInputText] = useState<string>("");
  const setGoodsinCart = useSetRecoilState(cart);
  const uid = useRecoilState(userIdState);
  const router = useRouter();

  const marginRight = { base: "0", md: "10" };

  const firebaseAddCollection = async (uid: any[]) => {
    await addDoc(collection(db, "menus"), {
      menuName: inputText,
      menuDetail: cartGoodsDatail,
      createdAt: serverTimestamp(),
      uid: uid[0],
    })
      .then(() => {
        alert("マイリストに登録しました");
        setInputText("");
      })
      .catch((e) => {
        alert("送信に失敗しました");
        console.log(e);
      });
    router.push("/my-page/");
    setGoodsinCart([]);
  };
  const falsyChangeBoolean: boolean = inputText ? false : true;

  return (
    <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "flex-end", md: "start" }}>
      <Box flex={{ base: "none", md: "1" }} mb={{ base: 6, md: 0 }} mr={marginRight} w={{ base: "100%", md: "auto" }} h="60px">
        <InputText inputText={inputText} setInputText={setInputText} />
      </Box>
      <Box>
        <ButtonSquare
          disabled={falsyChangeBoolean}
          onClick={() => {
            firebaseAddCollection(uid);
          }}
        >
          マイリストに追加
        </ButtonSquare>
      </Box>
    </Flex>
  );
};

export default InputArea;
