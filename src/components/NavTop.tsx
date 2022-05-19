import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonSolid from './button/ButtonSolid'

type Props = {}

const Line = () => {
  return <Box w="10" height={.5} bg="linear-gradient(92deg, #00CC99 0%, #7C3AA8 100%)" borderRadius={'full'} />
}

const NavTop = (props: Props) => {
  return (
    <Flex  pos={"fixed"} left="0" right="0" px="3">
      <Flex pt="4" justify={"space-between"} bg="#2A2B2A" w="2xl" mx="auto" maxW="md">
        <Flex flexDir={"column"}>
          <Text mb="1" fontWeight={'bold'} fontSize="24">Home</Text>
          <Line/>
        </Flex>
        <ButtonSolid>connect wallet</ButtonSolid>
      </Flex>
    </Flex>
  )
}

export default NavTop

// pos="fixed" px="4" w="2xl" mx="auto" maxW="md"