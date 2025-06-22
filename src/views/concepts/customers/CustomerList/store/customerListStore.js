import { create } from 'zustand'

const initialState = {
    showColoumns: true
}

export const useCustomerListStore = create((set) => ({
    ...initialState,
    toggleColumns: () => {
        set((state) => ({
            showColoumns: !state.showColoumns
        }))
    },
    resetTable: () => set(initialState),
}))
