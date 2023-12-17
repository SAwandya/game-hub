import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelecter from "./components/PlatformSelecter";
import SortSelecter from "./components/SortSelecter";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, SetSelectedGenre] = useState(null);

  const [selectedPlatform, SetselectedPlatform] = useState(null);

  const [selectedSortOrder, SetselectedSortOrder] = useState(null);

  const [insertedText, setSearchText] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => SetSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading genre={selectedGenre} platform={selectedPlatform} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelecter
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => SetselectedPlatform(platform)}
            />
            <SortSelecter
              selectedSortOrder={selectedSortOrder}
              onSelectSortOrder={(sortOrder) => SetselectedSortOrder(sortOrder)}
            />
          </HStack>
        </Box>

        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedSortOrder={selectedSortOrder}
          insertedText={insertedText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
