import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents'
import { selectActiveImage, openModal, clsoeModal, setActiveImage } from '../../features/activeImageSlice';
import { selectImageList } from '../../features/imageListSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LgModal = styled.div`
    height: 80vh;
    width: 80vw;
    img {
        min-height: 80%;
        min-width: 80%;
    }
`

const LargeImage = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList);
    const image = useSelector(selectActiveImage)
    const closeModal = (e) => {
        if (e.currentTarget === e.target) {
            dispatch(clsoeModal());
        }
    }

    const iterateImage =(e, i) => {
        e.preventDefault();
        let index=image.index + i;
        if (index < 0)  {
            index = images.length-1;
        } else if (index >= images.length) {
            index = 0;
        }
        dispatch(setActiveImage(images[index]))
        dispatch(openModal())

    }

    return (
        <FullScreenModal onClick={closeModal}>
            <LgModal>
                <a href='#'>Creator's page</a>
                <a href='#' onClick={(e) => iterateImage(e, -1)} >previous</a>
                <img src={image.path} alt=''/>
                <a href='#' onClick={(e) => iterateImage(e, 1)} >next</a>
                <a href='#'>Image Actions</a>
                <Link to='/edit' onClick={closeModal}>Edit image</Link>
            </LgModal>
        </FullScreenModal>
    )
}

export default LargeImage