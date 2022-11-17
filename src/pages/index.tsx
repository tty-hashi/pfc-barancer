import { useEffect } from "react";

import Header from "../components/templates/Header";
import TopFv from "../components/atoms/TopFirstView";
import SlidebarGrid from "../components/templates/SlidebarGrid";
import CardGrid from "../components/templates/CardGrid";
import Toast from "../components/atoms/Toast";
import LayoutContainer from "../components/atoms/LayoutContainer";
import ButtonCercleOrangeCart from "../components/atoms/buttons/ButtonCercleOrangeCart";
import { goodsFetch } from "../api/fetch";
import { useSetRecoilState } from "recoil";
import { goodsList, goodsListSource } from "../components/recoil/states";

export default function Home() {
  const setgoodsListState = useSetRecoilState(goodsList);
  const setGoodsListSourceState = useSetRecoilState(goodsListSource);
  Toast();

  // firebase からデータと fetch して state へ保持
  useEffect(() => {
    goodsFetch().then((result) => {
      setgoodsListState(result);
      setGoodsListSourceState(result);
    });
  }, []);
  
  return (
    <>
      <Header />
      <TopFv />
      <LayoutContainer>
        <SlidebarGrid />
        <CardGrid cercleOrangeButton={<ButtonCercleOrangeCart />} />
      </LayoutContainer>
    </>
  );
}
