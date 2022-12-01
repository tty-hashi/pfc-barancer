import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ButtonSquare from "../atoms/buttons/ButtonSquare";
import InputText from "../atoms/InputText";
import { goodsList, GoodsList, goodsListSource } from "../recoil/states";

const Search = () => {
  const [inputText, setInputText] = useState<string>("");
  const setGoodsListState = useSetRecoilState<GoodsList[]>(goodsList);
  const goodsListSourceState = useRecoilValue<GoodsList[]>(goodsListSource);

  if (inputText === "") {
    setGoodsListState(goodsListSourceState);
  }
  const onClickHandler = () => {
    const serchKeywords = inputText.trim().match(/[^\s]+/g);
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
