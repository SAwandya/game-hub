import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");

const useGames = (
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
  insertedText
) =>
  useQuery({
    queryKey: [
      "games",
      selectedGenre,
      selectedPlatform,
      selectedSortOrder,
      insertedText,
    ],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: selectedSortOrder,
          search: insertedText,
        },
      }),
  });

export default useGames;
