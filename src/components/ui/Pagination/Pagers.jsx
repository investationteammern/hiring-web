import React from 'react'

const Pagers = ({ currentPage, totalPages, onPageChange }) => {

    const pager = [...Array(10).keys()];
    return (
        <ul className="flex gap-1">
            {pager.map(n => (
                <span key={n} className='mx-2 cursor-pointer'>{n}</span>
            ))}
        </ul>
    )
}

export default Pagers