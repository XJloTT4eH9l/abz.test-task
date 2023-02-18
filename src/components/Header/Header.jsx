import logo from './img/logo.svg';
import Nav from '../Nav';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <img src={logo} alt="Test task" className="header__logo" />
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;
