import React from "react";
import { Input } from "@chakra-ui/react";

const InputText = () => {
  const fontSize = { base: "md", md: "lg" };
  return (
    <>
      <Input placeholder="input menu name" h="100%" fontFamily={'"Montserrat"'} fontSize={fontSize} borderColor="brand.main" />
    </>
  );
};

export default InputText;
