import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Btn from './Btn'

const TopFv = () => {
  return (
    <Box bgImage="url('/top-fv.png')" bgPosition="center bottom" bgRepeat="no-repeat" bgSize='cover' h={{ base: 350, md: 750 }}>
      <Box height={'100%'} maxW={'1200px'} mx={'auto'} position='relative'>
        <Box position='absolute' top={'50%'} transform='translateY(-55%)' right={'20px'}>
          <Heading as='h2' fontSize={{ base: '4xl', md: '8xl' }} color='#fff' textAlign={'right'}>Your good<br /> health & <br />good body</Heading>
          <Box w='fit-content' ml={'auto'} mr={0} mt={8} h='auto'>
            <Btn>Sing in</Btn>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default TopFv

