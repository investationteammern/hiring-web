import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus, TbTableImport, TbTableExport } from 'react-icons/tb'
import { useNavigate } from 'react-router'
import useCustomerList from '../hooks/useCustomerList'
import { CSVLink } from 'react-csv'
import { useEffect, useRef } from 'react'
import { useShowStore } from '@/store/showStore'
import { TbEyeFilled } from "react-icons/tb";
import Dropdown from '@/components/shared/dropdown/Dropdown'
import { coloumns } from '@/constants/table.constants'

const CustomerListActionTools = () => {
    const navigate = useNavigate()
    const show = useShowStore((state) => state.show)
    const toggleColumns = useShowStore((state) => state.toggleColumns)
    const setColumnsVisibility = useShowStore((state) => state.setColumnsVisibility)
    const dropdownRef = useRef(null)
    const toggleButtonRef = useRef(null)
    const { customerList } = useCustomerList()
    const tableId = 'customerTable'

    // handle show 
    const handleShow = () => {
        toggleColumns()
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setColumnsVisibility(false) // ✅ close dropdown
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [setColumnsVisibility])
    return (
        <div ref={dropdownRef} className="flex flex-col md:flex-row gap-3">
            {/* <CSVLink
                className="w-full"
                filename="customerList.csv"
                data={customerList}
            >
                <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    Download
                </Button>
            </CSVLink> */}
            <Button
                size="sm"
                variant="default"
                icon={<TbTableImport className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Import
            </Button>
            <Button
                size="sm"
                variant="default"
                icon={<TbTableExport className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Export
            </Button>
            <Button
                size="sm"
                variant='default'
                icon={<TbEyeFilled className='text-xl' />}
                onClick={handleShow}
                ref={toggleButtonRef}
            >
            </Button>
            <Dropdown
                dropdownRef={dropdownRef}
                columns={coloumns}
                tableId={tableId}
            />
            <Button
                size="sm"
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default CustomerListActionTools
