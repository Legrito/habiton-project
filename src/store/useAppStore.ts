import { create } from "zustand";

interface AppState {
  passedDays: string[];
  isModalOpen: boolean;
  addPassedDay: (day: string) => void;
  setPassedDays: (days: string[]) => void;
  toggleModal: () => void;
}

export const useAppStore = create<AppState>(set => ({
  passedDays: [],
  isModalOpen: false,
  addPassedDay: day =>
    set(state => {
      if (state.passedDays.length >= 20) {
        return { passedDays: [], isModalOpen: true };
      }

      return { passedDays: [...state.passedDays, day] };
    }),
  setPassedDays: days => set({ passedDays: days }),
  toggleModal: () => set(state => ({ isModalOpen: !state.isModalOpen })),
}));
