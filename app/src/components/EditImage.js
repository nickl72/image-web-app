import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Edit } from '../styles/Edit';
import { editImage, uploadImage, downloadImage, downloadAscii, getImageSize, cropImage} from '../services/api_helper';
import { useSelector } from 'react-redux';
import { selectActiveImage } from '../features/activeImageSlice';
import { selectUser } from '../features/userSlice';
import Crop from './Crop';

const EditImage = () => {
    const activeImage = useSelector(selectActiveImage);
    const user = useSelector(selectUser);

    const [image, setImage] = useState(activeImage.path)
    const [imageSize, setImageSize] = useState({width: null, height: null})
    const [edits, setEdits] = useState({
        brightness: 1,
        blur: 0,
        red: 0,
        green: 0,
        blue: 0
    })

    const [startCrop, setStartCrop] = useState({top: 0, left: 0})
    const [cropSize, setCropSize] = useState({height: 0, width: 0})
    const [cropClicks, setCropClicks] = useState(3)

    if (!imageSize.width) {
        getImageSize(activeImage.id).then(size => {
            setImageSize(size)
        })
    }

        
    const handleChange = (e) => {
        e.preventDefault();
        const update = Object.assign({}, edits)
        update[e.target.name] = e.target.value
        setEdits(update)
    }

    const handleApiCall = async (e, api) =>{
        e.preventDefault();
        switch(api) {
            case 'upload':
            // Need to update to logged in user!
                uploadImage(e, user.userId);
                break;
            case 'download':
                const filetype = e.target.filetype.value
                if (filetype === 'jpg') {
                    downloadImage(activeImage.id, 'newfile.jpeg');
                } else {
                    downloadAscii(activeImage.id, (filetype === 'html' ? 'True' : 'False'), `newfile.${filetype}`)
                }
                break;
            case 'edit':
                const reload = image
                setImage('none')
                const resp = await editImage(activeImage.id, edits);
                setImage(reload)
                break;
            default:
                return
        }
    }

    const cropClick = async (e) => {
        console.log(e)
        if (cropClicks === 0) {
            setStartCrop({top: e.clientY, left: e.clientX})
        } else if (cropClicks === 1) {
            //relative to window
            let left = startCrop.left - e.target.x
            let top = startCrop.top - e.target.y
            let right = left + cropSize.width
            let bottom = top + cropSize.height

            // relative to file size
            top = top * imageSize.height/e.target.height
            bottom  = bottom * imageSize.height/e.target.height

            left = left * imageSize.width/e.target.width
            right = right * imageSize.width/e.target.width
            const reload = image
            setImage('none')
            await cropImage(activeImage.id, left, top, right, bottom)
            setImage(reload)
        }
        setCropClicks(cropClicks + 1)
    }
    const cropDrag = (e) => {
        if (cropClicks === 1) {
            setCropSize({height:e.clientY-startCrop.top-5, width: e.clientX-startCrop.left-5})
        }
    }

    return (
        <Edit>
            { !user.userId && <Redirect to='/' />}
            <div>
                <h2>Edit</h2>
                <h3>Brightness: {edits.brightness}</h3>
                <input type='range' name='brightness' min='0' max='2' step='.01' value={edits.brightness} onChange={handleChange}/>
                <h3>Blur: {edits.blur}</h3>
                <input type='range' name='blur' min='0' max='5' value={edits.blur} onChange={handleChange}/>
                <h3>Color</h3>
                <h4>Red: {edits.red}</h4>
                <input type='range' name='red' min='-255' max='255' value={edits.red} onChange={handleChange}/>
                <h4>Green: {edits.green}</h4>
                <input type='range' name='green' min='-255' max='255' value={edits.green} onChange={handleChange}/>
                <h4>Blue: {edits.blue}</h4>
                <input type='range' name='blue' min='-255' max='255' value={edits.blue} onChange={handleChange}/>

                <h3>Insert Image</h3>
                <p>upload: </p>
                <form onSubmit={(e) => {handleApiCall(e,'upload')}}>
                    <input type='file' name='path' />
                    <input type='submit' value = 'Upload' />
                </form>
                <p><a onClick={() => setCropClicks(0)}>Crop</a></p>

                
                    <form href='#' onSubmit={(e) => {handleApiCall(e, 'download')}}>
                        <input type='submit'value='Download Image' />
                        <p>Download as: </p>
                        <select name='filetype'>
                            <option value='jpg'>JPEG</option>
                            <option value='txt'>ASCII.txt</option>
                            <option value='html'>ASCII.html</option>
                        </select>
                </form>
                <a onClick={(e) => handleApiCall(e, 'edit')} >Edit images</a>

            </div>
            <div className='image' >
                {image && <img src={`${image}?t=${new Date().getTime()}`} alt='' onClick={(e) => cropClick(e)} onMouseMove={(e) => cropDrag(e)}/>}
                {cropClicks < 3 && <Crop  top={startCrop.top} left={startCrop.left} height={cropSize.height} width={cropSize.width} />}
                {/* <p>-<input type='range' />+</p> */}
            </div>
        </Edit>
    )
}

export default EditImage