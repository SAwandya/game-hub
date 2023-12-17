import { Heading } from "@chakra-ui/react";

const GameHeading = (props) => {
  const { platform, genre } = props;

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
