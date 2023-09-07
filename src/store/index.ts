import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  onWhichPage: string;
  changePage: (currentPage: string) => void;
}

export const usePage = create<State>()(
  devtools(
    persist(
      (set) => ({
        onWhichPage: "locked-screen",
        changePage: (currentPage) =>
          set((state) => ({ onWhichPage: (state.onWhichPage = currentPage) })),
      }),
      { name: "page-store" }
    )
  )
);
