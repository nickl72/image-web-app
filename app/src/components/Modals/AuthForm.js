import React, {useState} from 'react';
import { FullScreenModal, Submit } from '../../styles/GlobalComponents';
import { Form, Input } from '../../styles/Auth';
import { registerUser, loginUser } from '../../services/api_helper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../features/userSlice';
import styled from 'styled-components';

const Top = styled(FullScreenModal)`
    z-index: 5;
`

const AuthForm = (props) => {
    const dispatch = useDispatch();
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
            const [resp, userId] = await loginUser(data)
            if (resp.status === 401 || resp.status === 400) {
                setErrorMessage('Incorrect username or password')
            } else if (resp.status >= 400) {
                setErrorMessage('An unknown error occured, please try again.')
            } else {
                dispatch(loginSuccess({username: data.username, id: userId}))
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
            const [resp, userId] = await registerUser(data)
            if (resp.status === 400) {
                setErrorMessage('Username is unavailable')
            } else if (resp.status >= 400) {
                setErrorMessage('An unknown error occured, please try again.')
            } else {
                dispatch(loginSuccess({username: data.username, id: userId}))
                props.toggleAuthForm()
            }
        }
        
    }
    return (
        <Top onClick={closeForm}>
            <div>
                <Form onSubmit={handleSubmit}>
                    <h2>{login ? 'Login to Flow Images' : 'Sign Up for Flow Images'}</h2>
                    <p>{errorMessage ? errorMessage : ' '}</p>
                    { !login && <Input type='text' name='first_name' placeholder='First Name'/>}
                    { !login && <Input type='text' name='last_name' placeholder='Last Name'/>}
                    <Input type='text' name='username' placeholder='username'/>
                    { !login && <Input type='text' name='email' placeholder='email'/>}
                    <Input type='password' name='password' placeholder='Password'/>
                    { login ? <Submit type='submit' value='Log In' /> : <Submit type='submit' value='Sign Up' />}
                    <a onClick={() =>{setLogin(!login); setErrorMessage(null)}}>{ login ? 'Not Registered? Sign Up Here!': 'Already have an account? Return to Login!'}</a>
                </Form>
            </div>
        </Top>
    )
}

export default AuthForm