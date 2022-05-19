import { Box, Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import NavBottom from '../NavBottom';
import NavTop from '../NavTop';

type Props = {
  children: ReactElement  ;

}

const DefaultLayout = (props: Props) => {
  return (
    <Flex position={'relative'} flexDir="column" w="2xl" mx="auto"  pb="24" px="4" maxW="md" minH="100vh">
      <NavTop/>
      <Box h="16"/>
      {props.children}
      <NavBottom/>
    </Flex>
  )
}

export default DefaultLayout