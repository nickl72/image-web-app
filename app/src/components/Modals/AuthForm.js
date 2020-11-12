import React, {useState} from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents';
import { registerUser, loginUser } from '../../services/api_helper';

const AuthForm = (props) => {
    const [login, setLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const closeForm = (e) => {
        if (e.currentTarget === e.target){
            props.toggleAuthForm()
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (login) {
            let data = {
                username: e.target.username.value,
                password: e.target.password.value
            }
            const resp = await loginUser(data)
            if (resp.status === 401 || resp.status === 400) {
                setErrorMessage('Incorrect username or password')
            } else if (resp.status >= 400) {
                setErrorMessage('An unknown error occured, please try again.')
            } else {
                props.toggleAuthForm()
            }
        } else {
            let data = {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value
            }
            const resp = await registerUser(data)
            if (resp.status === 400) {
                setErrorMessage('Username is unavailable')
            } else if (resp.status >= 400) {
                setErrorMessage('An unknown error occured, please try again.')
            } else {
                props.toggleAuthForm()
            }
        }
        
    }
    return (
        <FullScreenModal onClick={closeForm}>
            <div>
                <form onSubmit={handleSubmit}>
                    { errorMessage && <p>{errorMessage}</p>}
                    { !login && <input type='text' name='first_name' placeholder='First Name'/>}
                    { !login && <input type='text' name='last_name' placeholder='Last Name'/>}
                    <input type='text' name='username' placeholder='username'/>
                    { !login && <input type='text' name='email' placeholder='email'/>}
                    <input type='password' name='password' placeholder='Password'/>
                    { login ? <input type='submit' value='Log In' /> : <input type='submit' value='Sign Up' />}
                    <a onClick={() =>{setLogin(!login); setErrorMessage(null)}}>{ login ? 'Not Registered? Sign Up Here!': 'Already have an account? Return to Login!'}</a>
                </form>
            </div>
        </FullScreenModal>
    )
}

export default AuthForm