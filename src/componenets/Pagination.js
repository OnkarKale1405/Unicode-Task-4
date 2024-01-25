import React from 'react'
import { NavLink } from 'react-router-dom';

const Pagination = ({ productPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-4">
            <ul className='pagination h-4 text-white flex justify-center'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <NavLink onClick={() => paginate(number)}
                            className=' px-2 py-2 text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-gray-400'>
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;