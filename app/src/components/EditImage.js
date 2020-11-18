import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Edit, Image} from '../styles/Edit';
import { editImage, uploadImage, downloadImage, downloadAscii, getImageSize, cropImage} from '../services/api_helper';
import { useSelector } from 'react-redux';
import { selectActiveImage } from '../features/activeImageSlice';
import { selectUser } from '../features/userSlice';
import Crop from './Crop';
import { Anchor, Submit } from '../styles/GlobalComponents';


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
    const [editOnChange, setEditOnChange] = useState(false)

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
        if (editOnChange) {
            handleApiCall(e,'edit')
        }
    }

    const toggleEditOnChange = () => {
        setEditOnChange(!editOnChange)
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
                setEdits({
                    brightness: 1,
                    blur: 0,
                    red: 0,
                    green: 0,
                    blue: 0
                })
                break;
            default:
                return
        }
    }

    const cropClick = async (e) => {
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
            setCropClicks(2)
            setCropSize({height: 0, width: 0})
            setStartCrop({top:0, left:0})
        }
        setCropClicks(cropClicks + 1)
    }
    const cropDrag = (e) => {
        if (cropClicks === 1) {
            const cursorOffset = 10
            setCropSize({height:e.clientY-startCrop.top-cursorOffset, width: e.clientX-startCrop.left-cursorOffset})
        }
    }

    return (
        <Edit>
            { !user.userId && <Redirect to='/' />}
            <div className='edit-controls'>
                <h2>Edit</h2>
                <span>
                    <h3>Brightness:</h3>
                    <input 
                        type='number' 
                        name='brightness' 
                        min='0' 
                        max='2' 
                        step='.01'  
                        value={edits.brightness} 
                        onChange={handleChange}
                    />
                </span>
                <input 
                    type='range' 
                    name='brightness' 
                    min='0' 
                    max='2' 
                    step='.01' 
                    value={edits.brightness} 
                    onChange={handleChange}
                />
                <span>
                    <h3>Blur: </h3>
                    <input 
                        type='number' 
                        name='blur' 
                        min='0' 
                        max='5'
                        value={edits.blur} 
                        onChange={handleChange}
                    />
                </span>
                <input 
                    type='range' 
                    name='blur' 
                    min='0' 
                    max='5' 
                    value={edits.blur} 
                    onChange={handleChange}
                />
                <h3 className='color'>Color</h3>
                <span className='color-input'>
                    <h4>Red:</h4>
                    <input 
                        type='number'
                        name='red' 
                        min='-255' 
                        max='255'
                        value={edits.red} 
                        onChange={handleChange}
                    />
                </span>
                <input 
                    type='range' 
                    name='red' 
                    min='-255' 
                    max='255' 
                    value={edits.red} 
                    onChange={handleChange}
                />
                <span className='color-input'>
                    <h4>Green: </h4>
                    <input 
                        type='number'
                        name='green' 
                        min='-255' 
                        max='255'
                        value={edits.green} 
                        onChange={handleChange}
                    />
                </span>                
                <input 
                    type='range' 
                    name='green' 
                    min='-255' 
                    max='255' 
                    value={edits.green} 
                    onChange={handleChange}
                />
                <span className='color-input'>
                    <h4>Blue: </h4>
                    <input 
                        type='number'
                        name='blue' 
                        min='-255' 
                        max='255'
                        value={edits.blue} 
                        onChange={handleChange}
                    />
                </span>
                <input 
                    type='range' 
                    name='blue' 
                    min='-255' 
                    max='255' 
                    value={edits.blue} 
                    onChange={handleChange}
                />


                <p className='crop'><Anchor onClick={() => setCropClicks(0)}>Crop</Anchor></p>

                
                    <form href='#' onSubmit={(e) => {handleApiCall(e, 'download')}}>
                        <Submit type='submit'value='Download Image' />
                        <p>Download as: </p>
                        <select name='filetype'>
                            <option value='jpg'>JPEG</option>
                            <option value='txt'>ASCII.txt</option>
                            <option value='html'>ASCII.html</option>
                        </select>
                </form>
                <Anchor onClick={(e) => handleApiCall(e, 'edit')} >Edit image</Anchor>
                <span className='live'>
                    <input type='checkbox' name='render' value='render' onChange={toggleEditOnChange}/>
                    <label for='render' >Live Edits</label>
                </span>
            </div>

            <div className='image' >
                {image && <img  src={`${image}?t=${new Date().getTime()}`} alt='' onClick={(e) => cropClick(e)} onMouseMove={(e) => cropDrag(e)}/>}
                {(cropClicks < 2) && <Crop  top={startCrop.top} left={startCrop.left} height={cropSize.height} width={cropSize.width} />}
                {/* <p>-<input type='range' />+</p> */}
            </div>
        </Edit>
    )
}

export default EditImage