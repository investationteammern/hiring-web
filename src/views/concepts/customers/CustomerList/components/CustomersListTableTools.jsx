import { Button } from '@/components/ui'
import useCustomerList from '../hooks/useCustomerList'
import CustomerListSearch from './CustomerListSearch'
import CustomerTableFilter from './CustomerListTableFilter'
import cloneDeep from 'lodash/cloneDeep'
import { useShowStore } from '@/store/showStore'
import Dropdown from '@/components/shared/dropdown/Dropdown'
import { useEffect, useRef, useState } from 'react'


const CustomersListTableTools = () => {
    const { tableData, setTableData } = useCustomerList()



    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 relative" >
            <CustomerListSearch />

            <CustomerTableFilter />
        </div>
    )
}

export default CustomersListTableTools
