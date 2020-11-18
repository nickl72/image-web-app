import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../styles/Home';

const Div = styled.div`
    position: static;
`

const ImageListItem = (props) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <Image src={`${props.img.path}?t=${new Date().getTime()}`} alt='' onMouseEnter={toggleModal} />
        </div>
    )
}

export default ImageListItem