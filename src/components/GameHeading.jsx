import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre);
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
