import { extendTheme } from "@chakra-ui/react"
import { Noto_Sans_JP, Montserrat } from '@next/font/google'

const theme = extendTheme({
  baseStyle: {
    shadowsOutline:"#FCC05C",
  },
  fonts: {
    heading: 'Montserrat, sans-serif;',
    body: 'Noto Sans JP, sans-serif;',
  },
  colors: {
    brand: {
      main: "#FCC05C",
      bg: "#F7D2B0",
      action: "#F8730E",
      denger: "#f7fafc",
      black: "#333333"
    },
  },
  styles: {
    global: {
      'body': {
        color: 'brand.black',
        backgroundColor: 'rgba(247, 210, 176, 0.2)',
      },
    },
  },
})
export default theme