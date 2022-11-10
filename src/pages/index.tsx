import { useEffect } from "react";

import Header from "../components/templates/Header";
import TopFv from "../components/atoms/TopFirstView";
import SlidebarGrid from "../components/templates/SlidebarGrid";
import CardGrid from "../components/templates/CardGrid";
import Toast from "../components/atoms/Toast";
import LayoutContainer from "../components/atoms/LayoutContainer";
import ButtonCercleOrangeCart from "../components/atoms/ButtonCercleOrangeCart";
import { goodsFetch } from "../api/fetch";

export default function Home() {
  Toast();
  useEffect(() => {
    goodsFetch();
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
