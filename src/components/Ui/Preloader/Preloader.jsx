import './Preloader.scss';
import preloaderImg from './img/Preloader.svg';

const Preloader = () => {
    return (
        <img className='preloader' src={preloaderImg} alt='loading' />
    )
}


export default Preloader;
