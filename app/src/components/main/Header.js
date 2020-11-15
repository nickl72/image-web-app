import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { selectUser } from '../../features/userSlice';

import AuthForm from '../Modals/AuthForm';

// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {
    const user = useSelector(selectUser);
    console.log(user);
    const [Auth, setAuth] = useState(false);
    
    const toggleAuthForm = () => {
        setAuth(!Auth)
    }
    
    return(
        <StyledHeader>
            <Link to='/'><h1>Flow Images</h1></Link>
            <input type='text' placeholder='Search' />
            <Anchor onClick={toggleAuthForm}>Log In</Anchor>
            { Auth && <AuthForm toggleAuthForm={toggleAuthForm}/>}
        </StyledHeader>
    )
}

export default Header