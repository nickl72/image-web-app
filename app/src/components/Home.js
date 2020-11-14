import React, {useState} from 'react';
import {Image} from '../styles/Home'
import { randomImages} from '../services/api_helper';

const Home = () => {
    const [images, setImages] = useState(null)
    const callApi = async () => {
        const images = await randomImages()
        setImages(images)
    }
    if (!images) {
        callApi()
    }
    const handleclick = (e) => {
        e.preventDefault()
    }

    return (
        <>
            { images && images.map((img, key) => <a onClick={handleclick}><Image src={img.path} key={key} alt='' /></a>)}
        </>
    )
}

export default Home