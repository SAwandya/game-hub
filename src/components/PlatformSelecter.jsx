import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelecter = () => {
  const { data, error } = usePlatforms();

  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);
  const SetSelectedPlatform = useGameQueryStore((s) => s.SetSelectedPlatform);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => SetSelectedPlatform(platform)}
            key={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelecter;
