import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

import Btn from '../atoms/Btn'

const Header = () => {
  return (
    <>
      <Box bg='brand.main'>
        <Flex alignItems='center' h={{ base: 16, md: 24 }} maxW={1200} mx={'auto'} px={4}>
          <Heading as='h1' fontSize={{ base: '20px', md: '40px' }} color='#fff' letterSpacing='0.08em'>PFC BRANCER</Heading>
          <Spacer />
          <Btn>Sing In</Btn>
        </Flex>
      </Box>
    </>
  )
}

export default Header