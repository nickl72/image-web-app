import React from 'react';
import {Image} from '../styles/Home'
import { randomImages} from '../services/api_helper';
import { Link } from 'react-router-dom';
import { openModal, setActiveImage } from '../features/activeImageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setImageList, selectImageList } from '../features/imageListSlice';

const Home = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList)
    const callApi = async () => {
        const images = await randomImages()
        dispatch(setImageList(images))
    }
    if (!images[0]) {
        callApi()
    }
    const handleclick = (e, img) => {
        e.preventDefault()
        dispatch(setActiveImage(img))
        dispatch(openModal())
    }

    return (
        <>
            { images && images.map((img, key) => 
                <a onClick={(e) => handleclick(e,img)} key={key}>
                    <Image src={img.path} alt='' />
                </a>
            )}
        </>
    )
}

export default Home