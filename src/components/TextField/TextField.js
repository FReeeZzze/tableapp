import React from 'react'
import PropTypes from 'prop-types'
import './styles/TextField.css'

const TextField = ({ name, defaultValue, value, handleChange }) => {
    return <input 
        className="text-field" 
        name={name}
        value={value} 
        onChange={handleChange} 
        placeholder={defaultValue} 
    />
}

TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
}

export default TextField