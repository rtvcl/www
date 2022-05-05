import { Button, Flex, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement  ;

}

const DefaultLayout = (props: Props) => {
  return (
    <Flex flexDir="column" w="2xl" mx="auto">
        <Flex>
            <Text>Home</Text>
            <Button variant="solid">Connect Wallet</Button>
        </Flex>
        {props.children}
        <Flex>Body</Flex>
        <Flex>Bottom</Flex>
    </Flex>
  )
}

export default DefaultLayout