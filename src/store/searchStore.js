import { create } from 'zustand'

export const useSearchStore = create((set) => ({
    searchTerm: '',

    // Set search term for a specific table
    setSearchTerm: (term) => set({ searchTerm: term })
}))