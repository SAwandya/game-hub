import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform, selectedSortOrder) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platform: selectedPlatform?.id,
        ordering: selectedSortOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder]
  );

export default useGames;
