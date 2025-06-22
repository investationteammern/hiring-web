import { useShowStore } from '@/store/showStore';
import { useTableStore } from '@/store/table.Store';
import classNames from '@/utils/classNames'
import React, { useEffect } from 'react'

const Dropdown = ({ tableId, dropDownRef, columns }) => {
    const show = useShowStore((state) => state.show)
    const initColumns = useTableStore(state => state.initColumns)
    const toggleColumn = useTableStore(state => state.toggleColumn)
    const visibleColumns = useTableStore(state => state.getVisibleColumns(tableId))

    useEffect(() => {
        initColumns(tableId, columns)
    }, [tableId, columns])
    return (
        <ul ref={dropDownRef} className={classNames('w-[200px] bg-white shadow-lg absolute top-[88px] right-[170px] z-50 rounded-[20px] transition-all px-4 py-4 duration-300 ease-out transform',
            show
                ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
                : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none')}>
            {columns?.length > 0 && columns?.map(col => (
                <li key={col.key} className='flex gap-4 my-2'>
                    <input
                        type="checkbox" className='w-[18px] h-[18px]'
                        checked={!visibleColumns[col.key]}
                        onChange={() => toggleColumn(tableId, col.key)}
                    />
                    <span className='font-bold'>{col?.header}</span>
                </li>
            ))}
        </ul >
    )
}

export default Dropdown