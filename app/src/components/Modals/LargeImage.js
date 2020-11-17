import React from 'react';
import { FullScreenModal } from '../../styles/GlobalComponents'
import { selectActiveImage, openModal, clsoeModal, setActiveImage } from '../../features/activeImageSlice';
import { selectImageList } from '../../features/imageListSlice';
import { selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {downloadImage, downloadAscii, copyImage} from '../../services/api_helper';

const LgModal = styled.div`
    height: 80vh;
    width: 80vw;
    img {
        min-height: 95%;
        width: auto;
    }
    display: flex;
`

const LargeImage = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList);
    const image = useSelector(selectActiveImage);
    const user = useSelector(selectUser);
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

    const handleDownload = async (e) =>{
        e.preventDefault();
        const filetype = e.target.filetype.value
        if (filetype === 'jpg') {
            downloadImage(image.id, 'newfile.jpeg');
        } else {
            downloadAscii(image.id, (filetype === 'html' ? 'True' : 'False'), `newfile.${filetype}`)
        }
    }   

    const goToEdit = (e) => {
        if (user.userId !== image.creator && user.userId) {
            copyImage(user.userId, image.id).then(resp => {resp.creator=user.userId; dispatch(setActiveImage(resp))})
        }
        closeModal(e)
    }

    return (
        <FullScreenModal onClick={closeModal}>
            <LgModal>
                {/* <a>Creator's page</a> */}
                <a onClick={(e) => iterateImage(e, -1)} >previous</a>
                <img src={`${image.path}?t=${new Date().getTime()}`} alt=''/>
                <a onClick={(e) => iterateImage(e, 1)} >next</a>

                <form onSubmit={(e) => {handleDownload(e, 'download')}}>
                        <input type='submit'value='Download Image' />
                        <p>Download as: </p>
                        <select name='filetype'>
                            <option value='jpg'>JPEG</option>
                            <option value='txt'>ASCII.txt</option>
                            <option value='html'>ASCII.html</option>
                        </select>
                </form>
                <Link to='/edit' onClick={goToEdit}>Edit image</Link>
            </LgModal>
        </FullScreenModal>
    )
}

export default LargeImage