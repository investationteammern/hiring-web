import { create } from 'zustand'
import * as XLSX from 'xlsx'

export const useExportStore = create((set) => ({
    exportTableData: (data, filename = 'table-export') => {
        if (!Array.isArray(data) || data.length === 0) {
            console.warn('Nothing to export: data is empty or invalid.')
            return
        }
        try {
            const cleaned = data.map(({ _id, name }) => ({ _id, name }))
            const ws = XLSX.utils.json_to_sheet(cleaned)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
            XLSX.writeFile(wb, `${filename}.xlsx`)
        } catch (error) {
            console.error('Export failed:', error)
        }
    },
}))