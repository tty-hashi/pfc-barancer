import { Box } from "@chakra-ui/react";
import React from "react";
import SlideBar from "../atoms/SlideBar";
import SlideBarTitle from "../molecules/SlideBarTitle";

type Props = {
  cercleInnerText: string;
  title: string;
};

const SlideBarGroup: React.FC<Props> = (props) => {
  const { cercleInnerText, title } = props;
  return (
    <>
      <Box>
        <SlideBarTitle cercleInnerText={cercleInnerText} title={title}></SlideBarTitle>
        <SlideBar />
      </Box>
    </>
  );
};

export default SlideBarGroup;
