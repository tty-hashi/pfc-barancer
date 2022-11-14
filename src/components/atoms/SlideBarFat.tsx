import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { goodsListSource, silderValueFat } from "../recoil/states";
import SlideBar from "./SlideBar";

const SlideBarFat = () => {
  const [silderValueFatState, setSilderValueFatState] = useRecoilState(silderValueFat);

  return <SlideBar renderValueTextValue33={"10"} renderValueTextValue66={"30"} renderValueTextValue100={"50"} orMoreText={"以下"} sliderValue={silderValueFatState} setSliderValue={setSilderValueFatState} />;
};

export default SlideBarFat;
