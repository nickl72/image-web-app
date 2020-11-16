import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {setActiveImage, openModal} from '../features/activeImageSlice';
import {userImages } from '../services/api_helper';
import { setImageList, selectImageList } from '../features/imageListSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const images = useSelector(selectImageList);
    
    const getImages = async () => {
        const imgs = await userImages(user.userId)
        dispatch(setImageList(imgs))
    }

    if (!images[0]) {
        getImages()
    }

    const handleclick = (e, img) => {
        e.preventDefault()
        dispatch(setActiveImage(img))
        dispatch(openModal())
    }
    return (
        <div>
            <h2>{user.username}</h2>
            { images.map((img, key) => <img src={img.path} key={key} alt='' onClick={(e) => handleclick(e,img)}/> )}
        </div>
    )
}
export default Profile;