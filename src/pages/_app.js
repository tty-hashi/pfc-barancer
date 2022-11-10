import Head from 'next/head'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

import '../../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
