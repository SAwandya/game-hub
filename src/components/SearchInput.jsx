import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef(null);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        console.log(rf.current.value);
      }}
    >
      <InputGroup>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seach game..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
