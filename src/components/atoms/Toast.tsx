import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Toast = () => {
  const toast = useToast();
  useEffect(() => {
    toast({
      // title: "Current Time.",
      description: `ログインすることで、
      献立を作成・閲覧できます。`,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
      containerStyle: {
        width: "40%",
        maxWidth: "300px",
        background: "#fff",
      },
      variant: "toast",
    });
  }, []);
};

export default Toast;
