import React from 'react'
import PropTypes from 'prop-types'
import DropMenu from './DropMenu'
import './styles/DropDown.css'

const DropDown = ({ name, value, defaultValue, values, handleChange }) => {
    const [activeDropDown, setActiveDropDown] = React.useState(false)

    const handleClick = () => {
        setActiveDropDown((prev) => !prev)
    }

    return (
        <div 
            className="drop-down" 
            onClick={handleClick}
        >
            {value  || <span>{defaultValue}</span>}
            {activeDropDown && 
                <DropMenu 
                    values={values} 
                    name={name} 
                    handleChange={handleChange} 
                />}
        </div>
    )
}


DropDown.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    handleChange: PropTypes.func,
    values: PropTypes.array
}

export default DropDown