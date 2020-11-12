import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents';
import { registerUser, loginUser } from '../../services/api_helper';

const AuthForm = () => {
    const login = false;

    const handleSubmit = (e) => {
        e.preventDefault()
        let data
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
                name: e.target.name.value,
            }
            registerUser(data)
        }
        
    }
    return (
        <FullScreenModal>
            <div>
                <form onSubmit={handleSubmit}>
                    { !login && <input type='text' name='name' placeholder='name'/>}
                    <input type='text' name='username' placeholder='username'/>
                    { !login && <input type='text' name='email' placeholder='email'/>}
                    <input type='password' name='password' />
                    { login ? <input type='submit' value='Log In' /> : <input type='submit' value='Sign Up' />}
                </form>
            </div>
        </FullScreenModal>
    )
}

export default AuthForm