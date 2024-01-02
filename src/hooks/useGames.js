import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");

const useGames = (
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
  insertedText
) =>
  useInfiniteQuery({
    queryKey: [
      "games",
      selectedGenre,
      selectedPlatform,
      selectedSortOrder,
      insertedText,
    ],
    queryFn: (pageParam) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: selectedSortOrder,
          search: insertedText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGames;
