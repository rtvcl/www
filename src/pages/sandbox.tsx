import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const SandBox = () => {
  const { onToggle, isOpen } = useDisclosure();
  return (
    <Flex h="100%" pos="relative">
      <Flex
        onClick={onToggle}
        pos="absolute"
        bottom="0"
        w="100%"
        h={isOpen ? 14 : "calc(100% - 75vh)"}
        bg="primary.100"
        transition="height 1s ease"
      >
        <Text>Header</Text>
        <Text display="none" opacity={0}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione aliquid libero atque porro cupiditate obcaecati nostrum autem molestiae nihil.</Text>
      </Flex>
    </Flex>
  );
};

SandBox.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default SandBox;
