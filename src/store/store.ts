import { create } from "zustand";

type offcanvasT = {
  open: boolean;
  Toggle: () => void;
  close: () => void;
};

export const useOffcanvas = create<offcanvasT>()((set) => ({
  open: false,
  Toggle: () => set((previous) => ({ open: !previous.open })),
  close: () => set(() => ({ open: false })),
}));
