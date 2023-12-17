import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

const SearchInput = (props) => {
  const ref = useRef(null);

  const { onSearch } = props;

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
