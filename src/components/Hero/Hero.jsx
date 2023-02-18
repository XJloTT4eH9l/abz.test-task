import PropTypes from 'prop-types';
import Btn from '../Ui/Btn';
import './Hero.scss';

const Hero = ({ title, text, href, btnText }) => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1 className="title hero__title">{title}</h1>
                        <p className="text hero__text">{text}</p>
                        <a href={href} className="hero__link">
                            <Btn text={btnText} disabled={false} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    herf: PropTypes.string,
    btnText: PropTypes.string,
}

export default Hero;
