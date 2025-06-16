import useSWR from 'swr'
import { useCustomerListStore } from '../store/customerListStore'

export default function useCustomerList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomer,
        setSelectedCustomer,
        setSelectAllCustomer,
        setFilterData,
    } = useCustomerListStore((state) => state)





    return {
        // 
    }
}
