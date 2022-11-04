import React from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode;
}

const Btn: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Button bg="brand.action" color='#fff'>{children}</Button>
  )
}

export default Btn