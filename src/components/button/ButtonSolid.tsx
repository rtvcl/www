import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: string;
};

const ButtonSolid = (props: Props) => {
  return (
    <Button
      fontWeight={"normal"}
      border="3px solid transparent"
      bg="linear-gradient(#000 0 0) padding-box,linear-gradient(92deg, #00CC99 0%, #7C3AA8 100%) border-box;"
      boxShadow="0px 2px 8px 2px hsla(165, 100%, 40%, 0.25)"
    >
      {props.children}
    </Button>
  );
};

export default ButtonSolid;
