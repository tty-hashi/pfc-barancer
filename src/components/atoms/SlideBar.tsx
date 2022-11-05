import React, { useState } from "react";
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";

const SlideBar = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box pt={6} pb={2}>
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark value={sliderValue} textAlign="center" bg="brand.action" color="white" mt="-10" ml="-5" w="12">
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack background="brand.main" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default SlideBar;
