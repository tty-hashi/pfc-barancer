import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import InputText from "../atoms/InputText";
import { goodsList, GoodsList, goodsListSource } from "../recoil/states";

const Search = () => {
  const [inputText, setInputText] = useState<string>("");
  const setGoodsListState = useSetRecoilState<GoodsList[]>(goodsList);
  const goodsListSourceState = useRecoilValue<GoodsList[]>(goodsListSource);
  useEffect(() => {
    if (inputText === "") {
      setGoodsListState(goodsListSourceState);
    }
  }, [inputText]);
  const onClickHandler = () => {
    // 空白を削除して、入力された文字列グループを配列にする
    const serchKeywords = inputText.trim().match(/[^\s]+/g);
    //入力された文字列と item.goodsTitle が合致するか filter
    // every で入力された文字列の配列を一つずつ取り出して item.goodsTitle と突き合わせ、indexOf() で精査 (見つから無ければ-1が返る)
    const result = goodsListSourceState.filter((item) => serchKeywords.every((kw) => item.goodsTitle.indexOf(kw) !== -1));
    setGoodsListState(result);
  };
  return (
    <Flex mb={{ base: 6, md: 10 }}>
      <Box mr={{ base: 4, md: 6 }} flex="1">
        <InputText inputText={inputText} setInputText={setInputText} />
      </Box>
      <Box>
        <ButtonSquare onClick={onClickHandler}>検索</ButtonSquare>
      </Box>
    </Flex>
  );
};

export default Search;
