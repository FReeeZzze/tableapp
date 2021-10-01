import React from 'react'
import PropTypes from 'prop-types'
import SortColumns from './components/SortColumns'
import TableColumn from './components/TableColumn'
import TableRow from './components/TableRow'
import PaginationTable from './components/PaginationTable'
import FilterTable from './components/FilterTable'
import { parseDateString } from '../../utils'
import './styles/TableContainer.css'

const TableContainer = ({ table }) => {
    const [pagination, setPagination] = React.useState({
        currentPage: 1,
        nextPage: null,
        prevPage: null,
        totalPages: null,
        itemsPerPage: 10,
    })
    const [filteredTable, setFilteredTable] = React.useState([])

    const columns = [{
        name: 'Name',
        type: 'alpha'
    }, 
    {
        name: 'Count',
        type: 'numeric',
    },
    {
        name: 'Distance',
        type: 'numeric'
    }, 
    {
        name: 'Date',
        type: null
    }]

    React.useEffect(() => {
        setPagination((prev) => {
            const totalPages = filteredTable.length > 0 ? Math.ceil(filteredTable.length / prev.itemsPerPage) : 0
            const nextPage = prev.currentPage + 1
            return {
                ...prev,
                nextPage: totalPages > nextPage ? nextPage : null,
                totalPages,
            }
        })
    }, [filteredTable])

    const handleNextPage = () => {
        setPagination((prev) => {
            const nextPage = prev.nextPage + 1;
            const prevPage = prev.currentPage;
            return {
                ...prev,
                currentPage: prev.currentPage + 1,
                nextPage: prev.totalPages >= nextPage ? nextPage : null,
                prevPage
            }
        })
    }

    const handlePrevPage = () => {
        setPagination((prev) => {
            const nextPage = prev.currentPage;
            const prevPage = prev.prevPage - 1;
            return {
                ...prev,
                currentPage: prev.currentPage - 1,
                nextPage: nextPage,
                prevPage: prevPage > 0 ? prevPage : null
            }
        })
    }

    const handleChangePage = React.useCallback((page) => {
        setPagination((prev) => {
            const nextPage = page + 1
            const prevPage = page - 1
            return {
                ...prev,
                currentPage: page,
                nextPage: prev.totalPages >= nextPage ? nextPage : null,
                prevPage: prevPage > 0 ? prevPage : null,
            }
        })
    }, [setPagination])

    const handleFilterTable = React.useCallback((data) => {
        setFilteredTable(() => [...data])
    }, [setFilteredTable])

    const paginatedTable = React.useMemo(() => filteredTable.filter((_, index) => {
            const startIndex = pagination.itemsPerPage * pagination.currentPage - pagination.itemsPerPage;
            const endIndex = pagination.itemsPerPage * pagination.currentPage;
            if (index >= startIndex) {
                return index < endIndex;
            } 
            return null;
    }), [filteredTable, pagination.itemsPerPage, pagination.currentPage])


    return (
        <div className="table-container">
            <div className="table-inner">
                <FilterTable 
                    table={table} 
                    handleFilterTable={handleFilterTable} 
                />
                <SortColumns 
                    columns={columns} 
                    table={table} 
                    handleSortTable={handleFilterTable} 
                />
                {paginatedTable.length > 0 && paginatedTable
                    .map((item) => 
                        <TableRow key={`key:${item.id}`}>
                            <TableColumn value={item.Name} />
                            <TableColumn value={item.Count} />
                            <TableColumn value={item.Distance} />
                            <TableColumn value={parseDateString(item.Date)} />
                        </TableRow>
                )}
            </div>
            <PaginationTable 
                pagination={pagination} 
                handleNextPage={handleNextPage} 
                handlePrevPage={handlePrevPage} 
                handleChangePage={handleChangePage} 
            />
        </div>
    )
}

TableContainer.propTypes = {
    table: PropTypes.array,
}

export default React.memo(TableContainer);