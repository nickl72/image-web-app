import React, { useState } from 'react';
import { Edit } from '../styles/Edit';
import { getImageById, editImage, uploadImage, downloadImage } from '../services/api_helper';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveImage, selectActiveImage } from '../features/activeImageSlice';

const EditImage = () => {
    const dispatch = useDispatch();
    const activeImage = useSelector(selectActiveImage)

    const [image, setImage] = useState(null)
    const [edits, setEdits] = useState({
        brightness: 1,
        blur: 0,
        red: 0,
        green: 0,
        blue: 0
    })

    if (!image) {
        getImageById(7).then(resp => {
            setImage(resp.path)
            dispatch(setActiveImage(resp))
        })
    }
        
    const handleChange = (e) => {
        e.preventDefault();
        const update = Object.assign({}, edits)
        update[e.target.name] = e.target.value
        setEdits(update)
    }

    const handleApiCall = (e, api) =>{
        e.preventDefault();
        switch(api) {
            case 'upload':
                uploadImage(activeImage.id);
                break;
            case 'download': 
                downloadImage(activeImage.id, 'newfile.jpeg');
                break;
            case 'edit':
                editImage(activeImage.id, edits);
                break;
            default:
                return
        }
    }

    return (
        <Edit>
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
                <p>select from library</p>
                <input type='text' />
                <p><a href='#'>Crop</a></p>

                <p><a href='#' onClick={(e) => {handleApiCall(e, 'download')}}>download image</a></p>
                <p>Download as: </p><select>
                    <option>JPEG</option>
                    <option>ASCII</option>
                </select>
                <a onClick={(e) => handleApiCall(e, 'edit')} >Edit images</a>

            </div>
            <div className='image'>
                {image && <img src={`${image}`} alt='' onClick={(e) => {}}/>}
                <p>-<input type='range' />+</p>
            </div>
        </Edit>
    )
}

export default EditImage