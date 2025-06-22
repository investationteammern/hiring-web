import {
    useMemo,
    useRef,
    useEffect,
    useState,
    useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import Table from '@/components/ui/Table'
import Pagination from '@/components/ui/Pagination'
import Select from '@/components/ui/Select'
import Checkbox from '@/components/ui/Checkbox'
import TableRowSkeleton from './loaders/TableRowSkeleton'
import Loading from './Loading'
import FileNotFound from '@/assets/svg/FileNotFound'

import { HiPencil } from "react-icons/hi2";

import { themeConfig } from '@/configs/theme.config'
import { Button } from '../ui'
import { useTableStore } from '@/store/table.Store'


// import classNames from '@/utils/classNames'

const { Tr, Th, Td, THead, TBody, Sorter } = Table

const IndeterminateCheckbox = (props) => {
    const {
        indeterminate,
        onChange,
        onCheckBoxChange,
        onIndeterminateCheckBoxChange,
        ...rest
    } = props

    const ref = useRef(null)

    useEffect(() => {
        if (typeof indeterminate === 'boolean' && ref.current) {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, indeterminate])

    const handleChange = (e) => {
        onChange(e)
        onCheckBoxChange?.(e)
        onIndeterminateCheckBoxChange?.(e)
    }

    return (
        <Checkbox
            ref={ref}
            className="mb-0"
            onChange={(_, e) => handleChange(e)}
            {...rest}
        />
    )
}

function DataTable(props) {
    const { data, coloumns, totalPages, limit, currentPage, onPageChange, onLimitChange } = props;
    const tableId = 'customerTable'
    const visibleColumns = useTableStore(state => state.getVisibleColumns(tableId))
    console.log(visibleColumns)
    return (
        <>
            <Table>
                <THead>
                    <tr>
                        {coloumns.map(col =>
                            visibleColumns[col.key] && <th key={col.key}>{col.header}</th>
                        )}
                    </tr>
                </THead>
                <TBody>
                    {data?.map(el => (
                        <tr key={el._id}>

                            <>
                                {visibleColumns._id && <td>{el._id}</td>}
                                {visibleColumns.name && <td >{el?.name}</td>}
                                {visibleColumns.action &&
                                    <td>
                                        <Button
                                            variant="solid"
                                            icon={<HiPencil className='text-sm' />}
                                            className="w-[32px] h-[32px] rounded-full"
                                        >
                                        </Button>
                                    </td>
                                }
                            </>

                        </tr>
                    ))}
                </TBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <Pagination
                    currentPage={currentPage}
                    total={totalPages}
                    limit={limit}
                    onPageChange={onPageChange}
                />
                <div style={{ minWidth: 130 }}>
                    <Select
                        size="sm"
                        options={[5, 6, 20, 50].map((val) => ({
                            label: `${val}`,
                            value: val,
                        }))}
                        value={{ label: `${limit}`, value: limit }}
                        onChange={(selected) => onLimitChange?.(selected?.value)}
                        isSearchable={false}
                    />
                </div>
            </div>
        </>
    )
}

export default DataTable
