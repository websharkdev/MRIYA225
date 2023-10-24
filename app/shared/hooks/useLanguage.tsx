import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLanguage = create(
  persist(
    (set) => ({
      language: "ua",
      setLanguage: (language: "ua" | "en" | "es") => set({ language }),
    }),
    {
      name: "language-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      skipHydration: true,
    }
  )
);
