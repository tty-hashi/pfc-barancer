import { Box } from "@chakra-ui/react";
import React from "react";
import SlideBar from "../atoms/slideBar/SlideBar";
import SlideBarTitle from "../molecules/SlideBarTitle";

type Props = {
  cercleInnerText: string;
  title: string;
  slideBar: React.ReactNode;
};

const SlideBarGroup: React.FC<Props> = (props) => {
  const { cercleInnerText, title, slideBar } = props;
  return (
    <>
      <Box>
        <SlideBarTitle cercleInnerText={cercleInnerText} title={title}></SlideBarTitle>
        {slideBar}
      </Box>
    </>
  );
};

export default SlideBarGroup;
