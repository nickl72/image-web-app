import React from 'react';
import { Redirect } from 'react-router-dom';
import { userImages } from '../services/api_helper';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { setActiveImage, openModal } from '../features/activeImageSlice';
import { setImageList, selectImageList } from '../features/imageListSlice';

// Components
import ImageListItem from './ImageListItem';

// Styles
import { StyledHome, H2 } from '../styles/Home';


const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const images = useSelector(selectImageList);

    const getImages = async () => {
        const imgs = await userImages(user.userId)
        dispatch(setImageList(imgs))
    }
     
    const handleclick = (e, img) => {
        e.preventDefault()
        dispatch(setActiveImage(img))
        dispatch(openModal())
    }

    if (user.userId && !images[0]) {
        getImages()
    }

    
    return (
        <>
        <H2>{user.username}'s Images</H2>
        <StyledHome>
            {!user.userId && <Redirect to='/' />}
            { images.map((img, key) => <a onClick={(e) => handleclick(e,img)} key={key}>
                    <ImageListItem img={img}/>
                </a>
            )}
            
        </StyledHome>
        </>
    )
}
export default Profile;