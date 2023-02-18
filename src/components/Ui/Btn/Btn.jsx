import PropTypes from 'prop-types';
import './Btn.scss';

const Btn = ({ text, disabled, handleClick }) => {
    return (
        <button 
            className='btn'
            onClick={handleClick}
            disabled={disabled}
        >{text}
        </button>
    )
}

Btn.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func
}

export default Btn;
