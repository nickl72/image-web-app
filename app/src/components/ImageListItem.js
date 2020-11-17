import React, {useState} from 'react';
import {Image} from '../styles/Home';
import ImageActions from './Modals/ImageActions';
import styled from 'styled-components';

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
            {/* {modal && <ImageActions/>} */}
        </div>
    )
}

export default ImageListItem