import React, {useState} from 'react';

import AuthForm from '../Modals/AuthForm';
// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {

    const [Auth, setAuth] = useState(false);
    
    const toggleAuthForm = () => {
        setAuth(!Auth)
    }
    
    return(
        <StyledHeader>
            <h1>Flow Images</h1>
            <input type='text' placeholder='Search' />
            <Anchor onClick={toggleAuthForm}>Log In</Anchor>
            { Auth && <AuthForm toggleAuthForm={toggleAuthForm}/>}
        </StyledHeader>
    )
}

export default Header