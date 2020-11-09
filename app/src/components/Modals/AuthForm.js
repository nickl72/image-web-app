import React from 'react'

const AuthForm = () => {
    const login = true;
    return (
        <div>
            <div>
                <input type='text' placeholder='username'/>
                { login && <input type='text' placeholder='email'/>}
                <input type='password' />
                { login ? <a href='#'>Log In</a> : <a href='#'>Sign Up</a> }
            </div>
        </div>
    )
}

export default AuthForm