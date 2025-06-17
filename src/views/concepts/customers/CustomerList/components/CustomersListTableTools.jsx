import { Button } from '@/components/ui'
import useCustomerList from '../hooks/useCustomerList'
import CustomerListSearch from './CustomerListSearch'
import CustomerTableFilter from './CustomerListTableFilter'
import cloneDeep from 'lodash/cloneDeep'
import { TbEyeFilled } from "react-icons/tb";


const CustomersListTableTools = () => {
    const { tableData, setTableData } = useCustomerList()

    const handleInputChange = (val) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            setTableData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            setTableData(newTableData)
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <CustomerListSearch onInputChange={handleInputChange} />
            <Button
                variant='default'
                icon={<TbEyeFilled className='text-xl' />}
            >
            </Button>
            <CustomerTableFilter />
        </div>
    )
}

export default CustomersListTableTools
