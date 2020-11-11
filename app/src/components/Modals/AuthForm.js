import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents';
import { registerUser } from '../../services/api_helper';

const AuthForm = () => {
    const login = false;

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            // name: e.target.name.value,
        }
        console.log(data)
        registerUser(data)
    }
    return (
        <FullScreenModal>
            <div>
                <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='username'/>
                { !login && <input type='text' name='email' placeholder='email'/>}
                { !login && <input type='text' name='name' placeholder='name'/>}
                <input type='password' name='password' />
                { login ? <input type='submit' value='Log In' /> : <input type='submit' value='Sign Up' />}
                </form>
            </div>
        </FullScreenModal>
    )
}

export default AuthForm