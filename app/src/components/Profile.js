import React, { useState } from 'react';
import {userImages } from '../services/api_helper';

const Profile = () => {
    const [images, setImages] = useState([])
    const getImages = async () => {
        const imgs = await userImages(1)
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