import React from 'react';
import { Edit } from '../styles/Edit';

const EditImage = () => {
    return (
        <Edit>
            <div>
                <h2>Edit</h2>
                <h3>Brightness</h3>
                <input type='range' />
                <h3>Blur</h3>
                <input type='range' />
                <h3>Red</h3>
                <input type='range' />
                <h3>Green</h3>
                <input type='range' />
                <h3>Blue</h3>
                <input type='range' />
                <h3>Insert Image</h3>
                <p>upload: </p><input type='text' />
                <p>select from library</p><input type='text' />

            </div>
            <div className='image'>
                <img src='https://picsum.photos/200/300?random=22' alt='' />
            </div>
        </Edit>
    )
}

export default EditImage