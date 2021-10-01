import React from 'react'
import TextField from '../../../TextField'
import DropDown from '../../../DropDown'
import { checkСondition } from '../../../../utils'
import PropTypes from 'prop-types'
import './styles/FilterTable.css'

const FilterTable = ({ table, handleFilterTable }) => {
    const [filteredOptions, setFilter] = React.useState({
        column: '',
        condition: '',
        value: ''
    })
    const columns = ['Name', 'Count', 'Distance']
    const conditions = ['равно', 'больше', 'меньше', 'содержит']

    React.useEffect(() => {
        const column = filteredOptions.column
        const condition = filteredOptions.condition
        const value = filteredOptions.value

        if (column && condition && value) {
            handleFilterTable(table.filter((item) => checkСondition(item[column], value, condition)))
        }
        
    }, [table, filteredOptions, handleFilterTable])

    const handleChangeValue = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFilter((prev) => { 
            return {...prev, [name]: value }
        })
    }

    return (
        <div className="filter-container">
            <h3>Фильтр:</h3>
            <DropDown
                name="column"
                value={filteredOptions.column}
                defaultValue="Выберите колонку" 
                values={columns} 
                handleChange={handleChangeValue} 
            />
            <DropDown 
                name="condition"
                value={filteredOptions.condition}
                defaultValue="Выберите условие" 
                values={conditions} 
                handleChange={handleChangeValue} 
            />
            <TextField
                name="value"
                defaultValue="Введите значение для фильтра..."
                value={filteredOptions.value} 
                handleChange={handleChangeValue} 
            />
        </div>
    )
}

FilterTable.propTypes = {
    table: PropTypes.arrayOf(PropTypes.object),
    handleFilterTable: PropTypes.func,
}

export default FilterTable