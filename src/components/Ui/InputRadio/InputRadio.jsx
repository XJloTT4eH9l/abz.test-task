import PropTypes from 'prop-types';
import './InputRadio.scss';

const InputRadio = ({ id, name, curentPosition, positionHandler }) => {
    return (
        <>
            <input
                type='radio'
                id={id} 
                name={name}
                className='radio-input'
                checked={curentPosition === id}
                onChange={(e) => positionHandler(e)}
            />
            <label>{name}</label>
        </>
    )
}

InputRadio.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    positions: PropTypes.array,
    positionHandler: PropTypes.func
}

export default InputRadio;
