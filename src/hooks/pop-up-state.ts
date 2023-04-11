import { create } from "zustand";

interface PopStore {
  isShowing: boolean,
  showPopMenu: () => void,
  hidePopMenu: () => void
}

export const usePopMenuStore = create<PopStore>((set) => ({
  isShowing: false,
  showPopMenu: () => set(() => ({isShowing: true})),
  hidePopMenu: () => set(() => ({isShowing: false})),
}))