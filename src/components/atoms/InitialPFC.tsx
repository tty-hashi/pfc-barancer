import { Box } from '@chakra-ui/react'
import { type } from 'os'
import React from 'react'

type Props = {
  children: React.ReactNode;
  width: { base: string, md: string };
  fontSize: { base: string, md: string };
}

const InitialPFC: React.FC<Props> = (props) => {
  const { children, width, fontSize } = props;
  return (
    <Box w={width} h={width} fontSize={fontSize} fontWeight={'bold'} color='#fff' borderRadius='50%' bg='brand.main' fontFamily='"Montserrat"' display={'grid'} placeItems={'center'}>
      {children}
    </Box>
  )
}

export default InitialPFC