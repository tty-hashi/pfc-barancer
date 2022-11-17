import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { goodsListSource, silderValueCarbo } from "../../recoil/states";
import SlideBar from "./SlideBar";

const SlideBarCarbo = () => {
  const [silderValuePCarboState, setSilderValuePCarboState] = useRecoilState(silderValueCarbo);

  return <SlideBar renderValueTextValue33={"50"} renderValueTextValue66={"100"} renderValueTextValue100={"150"} orMoreText={"以下"} sliderValue={silderValuePCarboState} setSliderValue={setSilderValuePCarboState} />;
};

export default SlideBarCarbo;
