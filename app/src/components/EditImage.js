import React from 'react';
import { Edit } from '../styles/Edit';
import axios from 'axios';

const EditImage = () => {

    return (
        <Edit>
            <div>
                <h2>Edit</h2>
                <h3>Brightness</h3>
                <input type='range' />
                <h3>Blur</h3>
                <input type='range' />
                <h3>Color</h3>
                <h4>Red</h4>
                <input type='range' />
                <h4>Green</h4>
                <input type='range' />
                <h4>Blue</h4>
                <input type='range' />
                <h3>Insert Image</h3>
                <p>upload: </p><input type='text' />
                <p>select from library</p>
                <input type='text' />
                <p><a href='#'>Crop</a></p>

                <p><a href='#'>download image</a></p>
                <p>Download as: </p><select>
                    <option>JEPG</option>
                    <option>ASCII</option>
                </select>

            </div>
            <div className='image'>
                <img src='https://picsum.photos/1000/1000?random=22' alt='' />
                <p>-<input type='range' />+</p>
            </div>
        </Edit>
    )
}

export default EditImage