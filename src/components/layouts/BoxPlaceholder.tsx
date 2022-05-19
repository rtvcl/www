import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const BoxPlaceholder = (props: Props) => {
  return (
    <Flex flexFlow={'column'}>
      <Text>Top</Text>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Box h="20vh" w="100%" bg="red.200" mb="20px"/>
      <Text>End</Text>
    </Flex>
  )
}

export default BoxPlaceholder