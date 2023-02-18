import PropTypes from 'prop-types';
import './InputFile.scss';

const InputFile = (
    {
        image, 
        imageError, 
        imageDirty, 
        id, 
        name, 
        accept, 
        blurHandler, 
        uploadPhotoHandler 
    }) => {
    return (
        <>
            <label className='input-file' htmlFor={id}>
                <div className='input-file__button'>Upload</div>
                <div className='input-file__photo'>{image.name ? image.name : image}</div>
            </label>
            {(imageError && imageDirty) && <p className='form__error'>{imageError}</p>}
            <input 
                className='upload-photo' 
                type='file' 
                name={name}
                accept={accept} 
                id={id} 
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => uploadPhotoHandler(e)} 
            />
        </>
    )
}

InputFile.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    accept: PropTypes.string,
    imageError: PropTypes.string,
    imageDirty: PropTypes.bool,
    blurHandler: PropTypes.func,
    uploadPhotoHandler: PropTypes.func
}

export default InputFile;
