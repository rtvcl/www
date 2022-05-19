import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const portalRef = React.useRef(null)

  return (
    <Flex minHeight="100vh" flexFlow={"column"}>
    </Flex>
    
  )
}
Home.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);


export default Home
