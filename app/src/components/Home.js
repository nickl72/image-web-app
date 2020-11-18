import React, { useState } from 'react';
import { randomImages } from '../services/api_helper';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { openModal, setActiveImage } from '../features/activeImageSlice';
import { setImageList, selectImageList } from '../features/imageListSlice';

// Components
import ImageListItem from './ImageListItem';

// Styles
import { StyledHome} from '../styles/Home'

const Home = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList)
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

    return (
        <StyledHome>
            { images && images.map((img, key) => 
                <a onClick={(e) => handleclick(e,img)} key={key}>
                    <ImageListItem img={img}/>
                </a>
            )}
        </StyledHome>
    )
}

export default Home