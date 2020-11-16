import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { selectUser, logout } from '../../features/userSlice';
import { clearImageList } from '../../features/imageListSlice';
import { logout_helper } from '../../services/api_helper';

import AuthForm from '../Modals/AuthForm';

// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [Auth, setAuth] = useState(false);
    const toggleAuthForm = () => {
        setAuth(!Auth)
    }
    const handleLogout = () => {
        dispatch(logout());
        logout_helper()
    }

    const clearImages = () => {
        dispatch(clearImageList())
    }

    return(
        <StyledHeader>
            <Link to='/' onClick={clearImages}><h1>Flow Images</h1></Link>
            <input type='text' placeholder='Search' />
            {user.userId ? 
            <div><Link to='/profile' onClick={clearImages}>Profile</Link><Anchor onClick={handleLogout}>Logout</Anchor></div>
            : 
            <Anchor onClick={toggleAuthForm}>Log In</Anchor>
            }
            { Auth && <AuthForm toggleAuthForm={toggleAuthForm}/>}
        </StyledHeader>
    )
}

export default Header