import './Nav.scss';
import Btn from '../Ui/Btn';

const Nav = () => {
    const click = () => console.log('click');
    return (
        <nav className='nav'>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#users" className="nav__link">
                        <Btn text='Users' disabled={false} onClick={click} />
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#signUp" className="nav__link">
                        <Btn text='Sign up' disabled={false} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;