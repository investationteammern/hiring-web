import { useState } from 'react'
import StickyFooter from '@/components/shared/StickyFooter'
import Button from '@/components/ui/Button'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
// import useProductList from '../hooks/useProductList'
import { TbChecks } from 'react-icons/tb'

const ProductListSelected = () => {
    // const {
    //     selectedProduct,
    //     productList,
    //     mutate,
    //     productListTotal,
    //     setSelectAllProduct,
    // } = useProductList()

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)

    const handleDelete = () => {
        setDeleteConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleConfirmDelete = () => {
        const newProductList = productList.filter((product) => {
            return !selectedProduct.some(
                (selected) => selected.id === product.id,
            )
        })
        setSelectAllProduct([])
        mutate(
            {
                list: newProductList,
                total: productListTotal - selectedProduct.length,
            },
            false,
        )
        setDeleteConfirmationOpen(false)
    }

    return (
        <>


            <ConfirmDialog
                isOpen={deleteConfirmationOpen}
                type="danger"
                title="Remove products"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
            >
                <p>
                    {' '}
                    Are you sure you want to remove these products? This action
                    can&apos;t be undo.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default ProductListSelected
