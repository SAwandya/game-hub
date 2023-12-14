import { Card, Heading, Image, CardBody } from "@chakra-ui/react";

const GameCard = (props) => {
  const { game } = props;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
