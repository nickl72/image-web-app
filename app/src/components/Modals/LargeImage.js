import React from 'react';
import { FullScreenModal, Submit, Button } from '../../styles/GlobalComponents'
import { selectActiveImage, openModal, closeModal, setActiveImage } from '../../features/activeImageSlice';
import { selectImageList } from '../../features/imageListSlice';
import { selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LgModal } from '../../styles/Modal';
import { Link } from 'react-router-dom';
import {downloadImage, downloadAscii, copyImage} from '../../services/api_helper';
import { authOn }  from '../../features/authSlice';



const LargeImage = () => {
    const dispatch = useDispatch();
    const images = useSelector(selectImageList);
    const image = useSelector(selectActiveImage);
    const user = useSelector(selectUser);

    const closeModalLocal = (e) => {
        if (e.currentTarget === e.target) {
            dispatch(closeModal());
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
        if (!user.userId) {
            dispatch(authOn())
            return
        }
        if (user.userId !== image.creator && user.userId) {
            copyImage(user.userId, image.id).then(resp => {resp.creator=user.userId; dispatch(setActiveImage(resp))})
        }
        dispatch(closeModal())
    }

    return (
        <FullScreenModal onClick={closeModalLocal}>
            <LgModal>
                <Link to='/edit' onClick={goToEdit}><Button>Edit image</Button></Link>
                <div className='image-container'>
                    <Button onClick={(e) => iterateImage(e, -1)} >previous</Button>
                    <img src={`${image.path}?t=${new Date().getTime()}`} alt=''/>
                    <Button onClick={(e) => iterateImage(e, 1)} >next</Button>
                </div>
                
                <form onSubmit={(e) => {handleDownload(e, 'download')}}>
                        <Submit type='submit'value='Download Image' />
                        <div>
                            <p>Download as: </p>
                            <select name='filetype'>
                                <option value='jpg'>JPEG</option>
                                <option value='txt'>ASCII.txt</option>
                                <option value='html'>ASCII.html</option>
                            </select>
                        </div>
                </form>
                
            </LgModal>
        </FullScreenModal>
    )
}

export default LargeImage