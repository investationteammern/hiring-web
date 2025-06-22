import { create } from 'zustand'

export const useTableStore = create((set, get) => ({
    tables: {},
    initColumns: (tableId, columns) =>
        set((state) => ({
            tables: {
                ...state.tables,
                [tableId]: state.tables[tableId] || Object.fromEntries(
                    columns.map(col => [col.key, true])
                ),
            },
        })),
    toggleColumn: (tableId, key) =>
        set((state) => ({
            tables: {
                ...state.tables,
                [tableId]: {
                    ...state.tables[tableId],
                    [key]: !state.tables[tableId][key],
                },
            },
        })),

    getVisibleColumns: (tableId) => get().tables[tableId] || {},
}))