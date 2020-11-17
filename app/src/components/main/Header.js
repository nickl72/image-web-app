import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { selectUser, logout } from '../../features/userSlice';
import { clearImageList, setImageList } from '../../features/imageListSlice';
import { logout_helper, randomImages, userImages, uploadImage } from '../../services/api_helper';

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

    const homeImages = async () => {
        dispatch(clearImageList())
        const images = await randomImages()
        dispatch(setImageList(images))
    }
    const profileImages = async () => {
            dispatch(clearImageList())
            const imgs = await userImages(user.userId)
            dispatch(setImageList(imgs))
    }

    const upload = (e) =>{
        e.preventDefault();
        uploadImage(e, user.userId);
    }

    return(
        <StyledHeader>
            <form onSubmit={(e) => upload(e)}>
                    <input type='file' name='path' />
                    <input type='submit' value = 'Upload' />
            </form>
            <Link to='/' onClick={homeImages}><h1>Flow Images</h1></Link>
            {user.userId ? 
            <div><Link to='/profile' onClick={profileImages}>Profile</Link><Anchor onClick={handleLogout}>Logout</Anchor></div>
            : 
            <Anchor onClick={toggleAuthForm}>Log In</Anchor>
            }
            { Auth && <AuthForm toggleAuthForm={toggleAuthForm}/>}
        </StyledHeader>
    )
}

export default Header