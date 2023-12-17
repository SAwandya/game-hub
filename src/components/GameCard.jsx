import { Card, Heading, Image, CardBody, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = (props) => {
  const { game } = props;

  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
