import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents'
import { selectActiveImage, clsoeModal } from '../../features/activeImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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
    const image = useSelector(selectActiveImage)
    const closeModal = (e) => {
        if (e.currentTarget === e.target) {
            dispatch(clsoeModal());
        }
    }
    return (
        <FullScreenModal onClick={closeModal}>
            <LgModal>
                <a href='#'>Creator's page</a>
                <a href='#'>previous</a>
                <img src={image.path} alt=''/>
                <a href='#'>next</a>
                <a href='#'>Image Actions</a>
            </LgModal>
        </FullScreenModal>
    )
}

export default LargeImage