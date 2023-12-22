import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

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
      apiClient
        .get("/games", {
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedSortOrder,
            search: insertedText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
