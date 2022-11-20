import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const ButtonSquare: React.FC<Props> = (props) => {
  const { children, onClick, disabled } = props;

  return (
    <Button onClick={onClick} disabled={disabled} bg="brand.action" color="#fff" fontSize={{ md: "2xl" }} letterSpacing="0.08em" h={{ base: "40px", md: "60px" }} px={{ base: 4, md: 8 }}>
      {children}
    </Button>
  );
};

export default ButtonSquare;
