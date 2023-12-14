import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
