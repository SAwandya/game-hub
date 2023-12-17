import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelecter = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platfrom
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.name}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelecter;
