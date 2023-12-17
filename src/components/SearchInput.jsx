import { Input, InputGroup } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input borderRadius={20} placeholder="Seach game..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
