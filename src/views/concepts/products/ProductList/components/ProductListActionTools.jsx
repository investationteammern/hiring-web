import Button from '@/components/ui/Button'
import { TbCloudDownload, TbPlus } from 'react-icons/tb'
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router'
import { CSVLink } from 'react-csv'

const ProductListActionTools = () => {
    const navigate = useNavigate()

    // const { productList } = useProductList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            {/* <CSVLink >
                <Button icon={<TbCloudDownload className="text-xl" />}>
                    Export
                </Button>
            </CSVLink> */}
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/concepts/products/product-create')}
            >
                Import
            </Button>
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/concepts/products/product-create')}
            >
                Export
            </Button>
            <Button
                variant="plain"
                icon={<IoEye />}
                onClick={() => navigate('/concepts/products/product-create')}
            >

            </Button>
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/concepts/products/product-create')}
            >
                Add products
            </Button>
        </div>
    )
}

export default ProductListActionTools
