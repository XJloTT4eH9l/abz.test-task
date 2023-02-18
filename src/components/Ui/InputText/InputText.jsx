import PropTypes from 'prop-types';
import './InputText.scss';

const InputText = (
    { 
        name,
        type, 
        value, 
        placeholder, 
        fieldChange, 
        fieldError, 
        fieldDirty, 
        blurHandler
    }) => {
    return (
        <>
            <input
                name={name} 
                type={type}
                className={fieldError && fieldDirty ? 'input-text input-text__error' : 'input-text'}
                placeholder={placeholder} 
                value={value}
                onChange={(e) => fieldChange(e)}
                onBlur={(e) => blurHandler(e)}
            />
            {(fieldError && fieldDirty) && <p className='form__error'>{fieldError}</p>}
        </>
    )
}

InputText.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    fieldError: PropTypes.string,
    placeholder: PropTypes.string,
    fieldDirty: PropTypes.bool,
    fieldChange: PropTypes.func,
    blurHandler: PropTypes.func,
}

export default InputText;