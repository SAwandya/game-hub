import { create } from "zustand";

const useGameQueryStore = create((set) => ({
  selectedGenre: null,
  selectedPlatform: null,
  selectedSortOrder: null,
  insertedText: "",
  setSearchText: (newText) => set({ insertedText: newText }),
  SetSelectedGenre: (selectedGenre) => set({ selectedGenre: selectedGenre }),
  SetSelectedPlatform: (selectedPlatform) =>
    set({ selectedPlatform: selectedPlatform }),
  SetSelectedSortOrder: (selectedSortOrder) =>
    set({ selectedSortOrder: selectedSortOrder }),
}));

export default useGameQueryStore;
