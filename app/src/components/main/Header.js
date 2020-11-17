import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { selectUser, logout } from '../../features/userSlice';
import { clearImageList, setImageList } from '../../features/imageListSlice';
import { selectShowAuth, toggleAuth } from '../../features/authSlice';
import { logout_helper, randomImages, userImages, uploadImage } from '../../services/api_helper';
import { Button, Submit } from '../../styles/GlobalComponents';

import AuthForm from '../Modals/AuthForm';

// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const Auth = useSelector(selectShowAuth);
    const [uploadForm, setUpload] = useState(false)
    // const [Auth, setAuth] = useState(showAuth);
    const toggleAuthForm = () => {
        dispatch(toggleAuth())
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
        if (user.userId) {
            uploadImage(e, user.userId);
            setUpload(false)
        } else {
            dispatch(toggleAuth())
        }
    }
    

    return(
        <StyledHeader>
            {uploadForm ? 
            <form onSubmit={(e) => upload(e)}>
                    <input type='file' name='path' />
                    <Submit type='submit' value = 'Upload' />
            </form>
            :
            <Button onClick={() => setUpload(true)}>Upload Image</Button>
            }
            <Link to='/' onClick={homeImages}><h1>Flow Images</h1></Link>
            {user.userId ? 
            <div><Link to='/profile' onClick={profileImages}><Button>Profile</Button></Link><Anchor onClick={handleLogout}>Logout</Anchor></div>
            : 
            <Anchor onClick={toggleAuthForm}>Log In</Anchor>
            }
            { Auth && <AuthForm toggleAuthForm={toggleAuthForm}/>}
        </StyledHeader>
    )
}

export default Header