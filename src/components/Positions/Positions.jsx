import PropTypes from 'prop-types';
import InputRadio from '../Ui/InputRadio';
import './Positions.scss'

const Positions = ({ title, positions, curentPosition, positionHandler }) => {
    return (
        <>
            <h3 className='positions__title'>{title}</h3>
            <ul className="positions">
            {positions.map(({id, name}) => (
                <li className='positions__item' key={id}>
                    <InputRadio
                        id={id}
                        name={name}
                        curentPosition={curentPosition}
                        positionHandler={positionHandler}
                    />
                </li>
            ))}
        </ul>
        </>
    )
}

Positions.propTypes = {
    title: PropTypes.string,
    curentPosition: PropTypes.number,
    positions: PropTypes.array,
    positionHandler: PropTypes.func
}

export default Positions;
