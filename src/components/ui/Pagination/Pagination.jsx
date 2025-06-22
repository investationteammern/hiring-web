import React from 'react'
import Prev from './Prev'
import Next from './Next'
import Pagers from './Pagers'
import { HiChevronLeft } from 'react-icons/hi'
import { HiChevronRight } from 'react-icons/hi'
import Button from '@/components/ui/Button'

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    console.log(currentPage)
    return (
        <div className='flex items-center'>
            <span> Pages {currentPage} out of  {total}</span>
            <Button
                className="mx-2"
                size="xs"
                variant="default"
                icon={<HiChevronLeft />}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            <Button
                variant="default"
                size="xs"
                icon={<HiChevronRight />}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === total}
            />
        </div>
    )
}

export default Pagination