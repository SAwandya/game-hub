import useData from "./useData";

const useGames = (
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
  insertedText
) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platform: selectedPlatform?.id,
        ordering: selectedSortOrder,
        search: insertedText,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder, insertedText]
  );

export default useGames;
