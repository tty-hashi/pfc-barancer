import { useEffect, useState } from "react";

import Header from "../components/templates/Header";
import TopFv from "../components/atoms/TopFirstView";
import SlidebarGrid from "../components/templates/SlidebarGrid";
import CardGrid from "../components/templates/CardGrid";
import LayoutContainer from "../components/atoms/LayoutContainer";
import { goodsFetch } from "../api/fetch";
import { useRecoilState, useSetRecoilState } from "recoil";
import { goodsList, goodsListSource } from "../components/recoil/states";
import BottomFixedCalorie from "../components/molecules/BottomFixedCalorie";
import { Box, Spinner } from "@chakra-ui/react";
import ButtonSquare from "../components/atoms/buttons/ButtonSquare";
import Search from "../components/templates/Search";

export default function Home() {
  const [goodsListState, setGoodsListState] = useRecoilState(goodsList);
  const setGoodsListSourceState = useSetRecoilState(goodsListSource);
  const [slidebarShowTriggerState, setSlidebarShowTriggerState] = useState<boolean>(true);
  const [bottomFixedCalorieHandler, setBottomFixedCalorieHandler] = useState<boolean>(false);
  const [fetchComplete, setFetchComplete] = useState(false);
  // firebase からデータと fetch して state へ保持
  useEffect(() => {
    goodsFetch().then((result) => {
      setGoodsListState(result);
      setGoodsListSourceState(result);
      setFetchComplete(true);
    });
  }, []);
  // slider を有効にする
  const slidebarShowTrigger = () => {
    setSlidebarShowTriggerState(false);
  };
  // 最下部のカロリー計算をスクロールしたら出す
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const fade = window.pageYOffset;
      if (fade > 500) {
        setBottomFixedCalorieHandler(true);
      } else {
        setBottomFixedCalorieHandler(false);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <TopFv />
      <LayoutContainer>
        <Box position="relative">
          <Box zIndex="docked" position="absolute" top="0" left="0" w="100%" bottom="-6" bg="rgba(247, 210, 176, 0.7)" display={slidebarShowTriggerState ? "grid" : "none"} placeItems="center">
            <ButtonSquare onClick={slidebarShowTrigger}>商品ソートを有効にする</ButtonSquare>
          </Box>
          <SlidebarGrid />
        </Box>
        <Search />
        <Box minH="80vh" pb={{ base: "100px", md: "120px" }}>
          {fetchComplete ? <CardGrid isPageTop={true} goodsList={goodsListState} /> : <Spinner color="red.500" mx="auto" display="block" />}
        </Box>
      </LayoutContainer>
      {bottomFixedCalorieHandler && <BottomFixedCalorie />}
    </>
  );
}
