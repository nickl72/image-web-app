import React, { useState } from 'react'
import axios from 'axios'


const Main = () => {
    // const [images,setImages] = useState([])
    let images = []
    // images = []
    // https://picsum.photos/200/300?random=1
    // if (!images.length) {
    //     axios.get('https://picsum.photos/v2/list?limit=10')
    //     .then(resp => {
    //         const imageURLS = resp.data.map(image => (image.url));
    //         setImages(imageURLS);
    //     })
    // }
    // https://picsum.photos/id/237/200/300
    for (let i = 0; i < 8; i++) {
        const url = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*100)+1}`
        images.push(url)
    }

    return (
        <main>
            { images && images.map(url => <img src={url} alt='' />)}
        </main>
    )
}

export default Main