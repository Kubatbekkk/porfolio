import { create } from "zustand";

export enum trans {
  ru = 'ru',
  en = 'en'
}

interface LangStore {
  lng: trans,
  setRu: () => void,
  setEn: () => void
}

export const useLangStore = create<LangStore>((set) => ({
  lng: trans.en,
  setRu: () => set(() => ({lng: trans.ru})),
  setEn: () => set(() => ({lng: trans.en})),
}))