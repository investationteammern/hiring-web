import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus, TbTableImport, TbTableExport } from 'react-icons/tb'
import { useNavigate } from 'react-router'
import useCustomerList from '../hooks/useCustomerList'
import { CSVLink } from 'react-csv'

const CustomerListActionTools = () => {
    const navigate = useNavigate()

    const { customerList } = useCustomerList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
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
                variant="default"
                icon={<TbTableImport className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Import
            </Button>
            <Button
                variant="default"
                icon={<TbTableExport className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Export
            </Button>
            <Button
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
