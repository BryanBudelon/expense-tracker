import { create } from "zustand";

export const useGlobalState = create((set) => ({
  transactions: [],
  add: (data) =>
    set((state) => ({ transactions: [...state.transactions, data] })),
  del: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((item) => item.id != id),
    })),
}));
