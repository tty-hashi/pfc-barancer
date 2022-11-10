import { extendTheme } from "@chakra-ui/react";
import { Noto_Sans_JP, Montserrat } from "@next/font/google";

const theme = extendTheme({
  components: {
    Alert: {
      variants: {
        // define own toast variant
        toast: {
          container: {
            color: "gray.50",
            bg: "red.500",
          },
        },
      },
    },
  },
  baseStyle: {
    shadowsOutline: "#FCC05C",
  },
  fonts: {
    heading: "Montserrat, sans-serif;",
    body: "Noto Sans JP, sans-serif;",
  },
  colors: {
    brand: {
      main: "#FCC05C",
      bg: "#F7D2B0",
      action: "#F8730E",
      denger: "#f7fafc",
      black: "#333333",
    },
  },
  styles: {
    global: {
      body: {
        color: "brand.black",
        letterSpacing: "0.2em",
        backgroundColor: "rgba(247, 210, 176, 0.2)",
      },
    },
  },
});
export default theme;
