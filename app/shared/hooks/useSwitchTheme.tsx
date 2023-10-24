import { create } from "zustand";

interface useSwitchThemeProps {
  isLight: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSwitchTheme = create<useSwitchThemeProps>((set) => ({
  isLight: true,
  onOpen: () => set({ isLight: true }),
  onClose: () => set({ isLight: false }),
}));
