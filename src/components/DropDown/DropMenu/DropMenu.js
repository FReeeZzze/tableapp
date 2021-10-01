import PropTypes from 'prop-types'
import './styles/DropMenu.css'

const DropMenu = ({ values, name, handleChange }) => {
    const handleChangeMenu = (value) => {
        const obj = {
            target: {
                value,
                name
            }, 
        }
        handleChange(obj)
    }

    return (
        <div className="drop-menu">
            {values.map((item, index) => 
                <div 
                    key={`key-menu:${item} - ${index * item}`}
                    onClick={() => handleChangeMenu(item)}
                >
                    <div className="drop-item">{item}</div>
                </div>
            )}
        </div>
    )
}

DropMenu.propTypes = {
    handleChange: PropTypes.func,
    name: PropTypes.string,
    values: PropTypes.array
}

export default DropMenu