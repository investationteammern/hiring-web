import { create } from 'zustand'



export const useShowStore = create((set) => ({
    show: false,
    toggleColumns: () => set((state) => ({ show: !state.show })),
    setColumnsVisibility: (show) => set({ show }),
}))
