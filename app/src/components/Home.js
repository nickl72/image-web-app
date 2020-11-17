import React, {useState} from 'react';
import {Image, StyledHome} from '../styles/Home'
import { randomImages, uploadImage} from '../services/api_helper';
import { openModal, setActiveImage } from '../features/activeImageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setImageList, selectImageList } from '../features/imageListSlice';
import { selectUser } from '../features/userSlice';
import ImageActions from './Modals/ImageActions';
import ImageListItem from './ImageListItem';

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

    const toggleModal = (e) => {
        e.target.modal = true
    }

    return (
        <StyledHome>
            { images && images.map((img, key) => 
                <a onClick={(e) => handleclick(e,img)} key={key}>
                    <ImageListItem img={img}/>
                    {/* <Image src={`${img.path}?t=${new Date().getTime()}`} alt='' onMouseEnter={toggleModal}/>
                    <ImageActions /> */}
                </a>
            )}
        </StyledHome>
    )
}

export default Home