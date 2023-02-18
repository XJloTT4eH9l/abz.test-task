import Form from '../Form';
import './SignUp.scss';

const SignUp = ({ getUsers, setIsDisabled }) => {
    return (
        <section className='sign-up' id='signUp'>
            <div className="container">
                <div className="sign-up__inner">
                    <Form getUsers={getUsers} setIsDisabled={setIsDisabled} />
                </div>
            </div>
        </section>
    )
}

export default SignUp;