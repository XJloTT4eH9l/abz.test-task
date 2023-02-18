import { useState, useEffect } from 'react';
import axios from 'axios';

import InputText from '../Ui/InputText';
import Positions from '../Positions';
import InputFile from '../Ui/InputFile';
import Preloader from '../Ui/Preloader';
import successImage from './img/success-image.svg';

import './Form.scss';

const Form = ({ getUsers, setIsDisabled }) => {
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('Name cannot be empty');
    const [nameDirty, setNameDirty] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('Email cannot be empry');
    const [emailDirty, setEmailDirty] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('Phone number cannot be empty');
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [positions, setPositions] = useState([]);

    const [curentPosition, setCurentPosition] = useState(null);
    const [curentPositionError, setCurentPositionError] = useState(true);

    const [photo, setPhoto] = useState('Upload your photo');
    const [photoError, setPhotoError] = useState('Invalid image');
    const [photoDirty, setPhotoDirty] = useState(false);

    const [token, setToken] = useState(null);

    const [formValid, setFormValid] = useState(false);
    const [formDone, setFormDone] = useState(false);

    useEffect(() => {
        if(nameError || emailError || phoneError || curentPositionError || photoError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, phoneError, curentPositionError, photoError])

    useEffect(() => {
        getPositions();
        getToken();
    }, [])

    const getPositions = async () => {
        const positions = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
        setPositions(positions.data.positions);
    }

    const getToken = async () => {
        const token = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        setToken(token.data.token);
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'name':
                setNameDirty(true);
                break
            case 'email':
                setEmailDirty(true);
                break
            case 'phone':
                setPhoneDirty(true);
                break
            case 'photo':
                setPhotoDirty(true);
                break
            default: console.log('No input');
        }
    }

    const nameHandler = (e) => {
        const value = e.target.value;
        setName(value);
        if(value.length < 2) {
            setNameError('Name too short')
        } else if (value.length > 60) {
            setNameError('Name too long')
        } else {
            setNameError('');
        }
    }

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!re.test(value)) {
            setEmailError('Incorect email addres');
        } else {
            setEmailError('');
        }
    }

    const phoneHandler = (e) => {
        const value = e.target.value;
        setPhone(value);
        const re = /^[+]{0,1}380([0-9]{9})$/;
        if(!re.test(value)) {
            setPhoneError('Incorect phone number');
        } else {
            setPhoneError('');
        }
    }

    const positionHandler = (e) => {
        setCurentPositionError(false);
        setCurentPosition(+e.target.id);
    }

    const uploadPhotoHandler = (e) => {
        const maxSize = 5120;
        const image = e.target.files[0];
        const imageSize = image.size / 1024;

        if(imageSize > maxSize) {
            setPhotoError('Upload the image what less than 5MB')
        } else {
            setPhotoError('');
            setPhoto(e.target.files[0]);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setLoading(true);
       
        let formData = new FormData();
        formData.append('position_id', curentPosition);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', photo);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
        {
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            method: 'POST',
            body: formData,
            headers: {
                'Token': token
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            if(data.success) {
                getUsers();
                setFormDone(true);
                setIsDisabled(false);
            } else {
                alert(data.message);
            }
        }).catch(err => {
            console.log(err.message);
        })
        setLoading(false);
    }

    return (
        <>
            {formDone ? (
                <>
                    <h2 className="title">User successfully registered</h2>
                    <img className='form__success-img' src={successImage} alt='registration success'/>
                </>
            ) : (
                <>
                    <h2 className="title">Working with POST request</h2>
                    <form action="" method='post' className="form">
                        <div className='form__container'>
                            <InputText 
                                name='name'
                                type='text'
                                placeholder='Your name'
                                value={name}
                                fieldChange={nameHandler}
                                blurHandler={blurHandler}
                                fieldError={nameError}
                                fieldDirty={nameDirty}
                            />
                        </div>
                        <div className='form__container'>
                            <InputText 
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={email}
                                fieldChange={emailHandler}
                                blurHandler={blurHandler}
                                fieldError={emailError}
                                fieldDirty={emailDirty}
                            />
                        </div>
                        <div className='form__container'>
                            <InputText 
                                name='phone'
                                type='tel'
                                placeholder='Phone'
                                value={phone}
                                fieldChange={phoneHandler}
                                blurHandler={blurHandler}
                                fieldError={phoneError}
                                fieldDirty={phoneDirty}
                            />
                        </div>
                        <Positions 
                            title="Select your position"
                            positions={positions}
                            curentPosition={curentPosition}
                            positionHandler={positionHandler}
                        />
                        <div className="form__container">
                            <InputFile
                                image={photo} 
                                name='photo'
                                accept='.jpg, .jpeg'
                                id='file'
                                imageError={photoError}
                                imageDirty={photoDirty}
                                blurHandler={blurHandler}
                                uploadPhotoHandler={uploadPhotoHandler}
                            />
                        </div>
                        <button 
                            type='submit'
                            onClick={(e) => submitHandler(e)} 
                            disabled={!formValid} 
                            className='form__submit' 
                        >
                            Sign up
                        </button>
                    </form>
                    {loading && <Preloader />}
                </>
            )}
        </>
    )
}


export default Form;