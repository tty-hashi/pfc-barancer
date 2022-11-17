import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const ButtonSquare: React.FC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <Button onClick={onClick} bg="brand.action" color="#fff" fontSize={{ md: "2xl" }} letterSpacing="0.08em" h={{ base: "40px", md: "60px" }} px={{ base: 4, md: 8 }}>
      {children}
    </Button>
  );
};

export default ButtonSquare;
