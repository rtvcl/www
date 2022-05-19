import { Flex, Icon, IconButton, List, ListItem, Text, useDisclosure, useOutsideClick } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiDownArrow, BiMenu } from "react-icons/bi";
import LogoIcon from "./logo/Icon";

type Props = {};

const NavBottom = (props: Props) => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  const ref = useRef(null)
  useOutsideClick({
    ref: ref,
    handler: () => onClose()
  })

  return (
    <Flex  pos={"fixed"} left="0" bottom={0} right="0" px="3">
    <Flex
      ref={ref}
      w="2xl" mx="auto" maxW="md"
      mb="4"
      borderRadius={12}
      border="5px solid transparent"
      bg="linear-gradient(#000 0 0) padding-box,linear-gradient(92deg, #00CC99 0%, #7C3AA8 100%) border-box;"
      boxShadow="0px 2px 8px 2px hsla(165, 100%, 40%, 0.25)"
      flexDir="column"
      h={!isOpen ? "16" : "36vh"}
      overflowY="hidden"
      transition="height 0.5s ease"
    >
      <Flex w="100%" justify="space-between" align="center" px="4" py="2" onClick={onToggle}>
        <Flex align={"center"} gap="2">
          <Icon as={LogoIcon} w="6" h="6"/>
          <Text letterSpacing="0.2em" fontSize="2xl">
            RTVCL
          </Text>
        </Flex>
        <IconButton
        size={"sm"}
            onClick={onToggle}
          aria-label="menu"
          icon={!isOpen ? <BiMenu /> : <BiDownArrow />}
        />
      </Flex>
      <Flex overflowY={isOpen ? "auto" : "hidden"}>
        <List >
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
          <ListItem>5</ListItem>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
          <ListItem>5</ListItem>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
          <ListItem>5</ListItem>
        </List>
      </Flex>
    </Flex>
    </Flex>
  );
};
// border: 2px solid;

// border-image-source: linear-gradient(92.01deg, #00CC99 0%, #7C3AA8 100%);

// box-shadow: 0px 2px 8px 2px hsla(165, 100%, 40%, 0.25);

export default NavBottom;
