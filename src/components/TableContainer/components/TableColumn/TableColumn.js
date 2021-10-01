import React from 'react'
import PropTypes from 'prop-types'
import './styles/TableColumn.css'

const TableColumn = ({ value }) => {
    return (
        <div className="table-column" tabIndex="0">{value}</div>
    )
}

TableColumn.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default React.memo(TableColumn);