import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {setActiveImage, openModal} from '../features/activeImageSlice';
import {userImages } from '../services/api_helper';
import { setImageList, selectImageList } from '../features/imageListSlice';
import { Redirect } from 'react-router-dom';

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
    const upload = (e) =>{
        e.preventDefault();
        uploadImage(e, user.userId);
    }
    
    return (
        <div>
            {!user.userId && <Redirect to='/' />}
            <h2>{user.username}</h2>
            { images.map((img, key) => <img src={img.path} key={key} alt='' onClick={(e) => handleclick(e,img)}/> )}
            <form onSubmit={(e) => upload(e)}>
                    <input type='file' name='path' />
                    <input type='submit' value = 'Upload' />
            </form>
        </div>
    )
}
export default Profile;