import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
    <Box>
      <InputText inputText={inputText} setInputText={setInputText} />
      <ButtonSquare onClick={onClickHandler}>検索</ButtonSquare>
    </Box>
  );
};

export default Search;
