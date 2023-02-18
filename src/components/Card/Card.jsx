import PropTypes from 'prop-types';
import photoCover from './img/photo-cover.svg';
import './Card.scss';

const Card = ({ id, name, photo, position, email, phone }) => {
    const trimInfo = (str) => {
        if(str.length > 30) {
            return str.slice(0, 30) + '...'
        }
        
        return str
    }
    
    return (
        <li className='card' key={id}>
            <img className='card__img' src={photo ? photo : photoCover} alt={name} />
            <h3 className="card__name">{trimInfo(name)}</h3>
            <p className="text">{trimInfo(position)}</p>
            <a href={`mailto:${email}`} className="card__link">{trimInfo(email)}</a>
            <p className="card__link">{phone}</p>
        </li>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
}

export default Card;
