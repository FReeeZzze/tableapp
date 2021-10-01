import PropTypes from 'prop-types'
import './styles/TableRow.css'

const TableRow = ({ children }) => {
    return (
        <div className="table-row">{children}</div>
    )
}

TableRow.propTypes = {
    children: PropTypes.node,
}

export default TableRow;