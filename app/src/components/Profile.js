import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {userImages } from '../services/api_helper';

const Profile = () => {
    const user = useSelector(selectUser);
    const [images, setImages] = useState([])
    const getImages = async () => {
        const imgs = await userImages(user.id)
        setImages(imgs)
    }
    if (!images[0]) {
        getImages()
    }
    return (
        <div>
            <h2>Username</h2>
            { images.map((img, key) => <img src={img.path} key={key} alt=''/> )}
        </div>
    )
}
export default Profile;