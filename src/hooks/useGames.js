import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform) =>
  useData(
    "/games",
    { params: { genres: selectedGenre?.id, platform: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
