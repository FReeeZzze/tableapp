import React from 'react'
import PropTypes from 'prop-types'
import './styles/PaginationTable.css'

const PaginationTable = ({ pagination, handleNextPage, handlePrevPage, handleChangePage }) => {

    const TotalPages = React.useMemo(() => {
        return Array.from({ length: pagination.totalPages}, 
                (_, page) => <button className={`pagination-button ${pagination.currentPage === page + 1 ? 'active-button' : '' }`} key={`key-page:${page + 1}`} onClick={() => handleChangePage(page + 1)}>{page + 1}</button>)
    }, [pagination.totalPages, pagination.currentPage, handleChangePage])


    return (
        <div className="pagination">
            {pagination.totalPages ? <button className="pagination-button" onClick={handlePrevPage} disabled={!pagination.prevPage}>{`<`}</button> : ''}
            {pagination.totalPages && TotalPages ? TotalPages : ''} 
            {pagination.totalPages ? <button className="pagination-button" onClick={handleNextPage} disabled={!pagination.nextPage}>{`>`}</button>: ''}
        </div>
    )
}

PaginationTable.propTypes = {
    pagination: PropTypes.object,
    handleChangePage: PropTypes.func,
    handleNextPage: PropTypes.func,
    handlePrevPage: PropTypes.func,
}

export default PaginationTable;