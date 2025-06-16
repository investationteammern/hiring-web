import useSWR from 'swr'
import { useOrderListStore } from '../store/orderListStore'

export default function useOrderList() {
    const { tableData, filterData, setTableData, setFilterData } =
        useOrderListStore((state) => state)





    return {
        // 
    }
}
