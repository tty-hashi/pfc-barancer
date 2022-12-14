import React from "react";
import { useRecoilState } from "recoil";
import { silderValueProtein } from "../../recoil/states";
import SlideBar from "./SlideBar";

const SlideBarProtein = () => {
  const [silderValueProteinState, setSilderValueProteinState] = useRecoilState(silderValueProtein);

  return <SlideBar renderValueTextValue33={"10"} renderValueTextValue66={"20"} renderValueTextValue100={"30"} orMoreText={"以上"} sliderValue={silderValueProteinState} setSliderValue={setSilderValueProteinState} />;
};

export default SlideBarProtein;
