import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
};

const InputText: React.FC<Props> = (props) => {
  const { inputText, setInputText } = props;
  const fontSize = { base: "md", md: "lg" };
  console.log(inputText);
  return (
    <>
      <Input
        placeholder="input menu name"
        h="100%"
        fontFamily={'"Montserrat"'}
        fontSize={fontSize}
        borderColor="brand.main"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </>
  );
};

export default InputText;
