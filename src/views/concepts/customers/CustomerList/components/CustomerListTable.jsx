import { useMemo } from 'react'
import Avatar from '@/components/ui/Avatar'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useCustomerList from '../hooks/useCustomerList'
import { Link, useNavigate } from 'react-router'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import useCategoryList from '../hooks/useCustomerList'
import Loading from '@/components/shared/Loading'
import { useShowStore } from '@/store/showStore'
import { coloumns } from '@/constants/table.constants'

const CustomerListTable = () => {
    const { categories, loading, error, totalPages, limit, page, onPageChange, onLimitChange } = useCategoryList();
    const { showColoumns } = useShowStore();

    if (loading) {
        return <Loading />
    }
    return (
        <DataTable
            data={categories}
            coloumns={coloumns}
            show={showColoumns}
            totalPages={totalPages}
            limit={limit}
            currentPage={page}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
        />
    )
}
export default CustomerListTable
