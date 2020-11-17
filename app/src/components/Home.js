import React, {useState} from 'react';
import {Image} from '../styles/Home'
import { randomImages, uploadImage} from '../services/api_helper';
import { openModal, setActiveImage } from '../features/activeImageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setImageList, selectImageList } from '../features/imageListSlice';
import { selectUser } from '../features/userSlice';

const Home = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList)
    const user = useSelector(selectUser)
    const [loaded, setLoaded] = useState(false)

    const callApi = async () => {
        const images = await randomImages()
        dispatch(setImageList(images))
    }
    if (!loaded) {
        callApi()
        setLoaded(true)
    }
    const handleclick = (e, img) => {
        e.preventDefault()
        dispatch(setActiveImage(img))
        dispatch(openModal())
    }

    const upload = (e) =>{
        e.preventDefault();
        uploadImage(e, user.userId);
    }

    return (
        <>
            { images && images.map((img, key) => 
                <a onClick={(e) => handleclick(e,img)} key={key}>
                    <Image src={`${img.path}?t=${new Date().getTime()}`} alt='' />
                </a>
            )}
             <form onSubmit={(e) => upload(e)}>
                    <input type='file' name='path' />
                    <input type='submit' value = 'Upload' />
            </form>
        </>
    )
}

export default Home