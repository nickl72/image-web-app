import React, {useState} from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents';
import { registerUser, loginUser } from '../../services/api_helper';

const AuthForm = (props) => {
    const [login, setLogin] = useState(true)

    const closeForm = (e) => {
        if (e.currentTarget === e.target){
            props.toggleAuthForm()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (login) {
            let data = {
                username: e.target.username.value,
                password: e.target.password.value
            }
            loginUser(data)
        } else {
            let data = {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value
            }
            registerUser(data)
        }
        
    }
    return (
        <FullScreenModal onClick={closeForm}>
            <div>
                <form onSubmit={handleSubmit}>
                    { !login && <input type='text' name='first_name' placeholder='First Name'/>}
                    { !login && <input type='text' name='last_name' placeholder='Last Name'/>}
                    <input type='text' name='username' placeholder='username'/>
                    { !login && <input type='text' name='email' placeholder='email'/>}
                    <input type='password' name='password' placeholder='Password'/>
                    { login ? <input type='submit' value='Log In' /> : <input type='submit' value='Sign Up' />}
                    <a onClick={() =>setLogin(!login)}>{ login ? 'Not Registered? Sign Up Here!': 'Already have an account? Return to Login!'}</a>
                </form>
            </div>
        </FullScreenModal>
    )
}

export default AuthForm