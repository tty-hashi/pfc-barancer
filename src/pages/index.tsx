import { useEffect } from "react";

import Header from "../components/templates/Header";
import TopFv from "../components/atoms/TopFirstView";
import SlidebarGrid from "../components/templates/SlidebarGrid";
import CardGrid from "../components/templates/CardGrid";
import Toast from "../components/atoms/Toast";
import LayoutContainer from "../components/atoms/LayoutContainer";
import { goodsFetch } from "../api/fetch";
import { useRecoilState, useSetRecoilState } from "recoil";
import { goodsList, goodsListSource } from "../components/recoil/states";
import BottomFixedCalorie from "../components/molecules/BottomFixedCalorie";

export default function Home() {
  const [goodsListState, setGoodsListState] = useRecoilState(goodsList);
  const setGoodsListSourceState = useSetRecoilState(goodsListSource);

  Toast();

  // firebase からデータと fetch して state へ保持
  useEffect(() => {
    goodsFetch().then((result) => {
      setGoodsListState(result);
      setGoodsListSourceState(result);
    });
  }, []);

  return (
    <>
      <Header />
      <TopFv />
      <LayoutContainer>
        <SlidebarGrid />
        <CardGrid isPageTop={true} goodsList={goodsListState} />
      </LayoutContainer>
      <BottomFixedCalorie />
    </>
  );
}
