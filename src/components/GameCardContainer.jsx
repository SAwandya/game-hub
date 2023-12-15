import { Box } from "@chakra-ui/react";
import React from "react";

const GameCardContainer = (props) => {
  const { children } = props;

  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
