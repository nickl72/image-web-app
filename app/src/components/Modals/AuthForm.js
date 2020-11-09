import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents';


const AuthForm = () => {
    const login = true;
    return (
        <FullScreenModal>
            <div>
                <input type='text' placeholder='username'/>
                { login && <input type='text' placeholder='email'/>}
                <input type='password' />
                { login ? <a href='#'>Log In</a> : <a href='#'>Sign Up</a> }
            </div>
        </FullScreenModal>
    )
}

export default AuthForm