import React from 'react';
import {Image} from '../styles/Home'

const Home = () => {
    const images = []

    for (let i = 0; i < 8; i++) {
        const url = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*100)+1}`
        images.push(url)
    }

    return (
        <>
            { images.map((url, key) => <Image src={url} key={key} alt='' />)}
        </>
    )
}

export default Home