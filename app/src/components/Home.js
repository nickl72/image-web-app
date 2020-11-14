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
        console.log('false')
        callApi()
    }
    const handleclick = (e) => {
        e.preventDefault()
        // downloadExternal()
    }

    return (
        <>
            {/* <button onClick={handleclick}>download lorem picsum</button> */}
            {/* <a href='https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true' download>download lorem</a> */}
            { images && images.map((img, key) => <a onClick={handleclick}><Image src={img.path} key={key} alt='' /></a>)}
        </>
    )
}

export default Home