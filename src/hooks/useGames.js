import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient("/games");

const useGames = () => {
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre);
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform);
  const selectedSortOrder = useGameQueryStore((s) => s.selectedSortOrder);
  const insertedText = useGameQueryStore((s) => s.insertedText);

  return useInfiniteQuery({
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

    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
