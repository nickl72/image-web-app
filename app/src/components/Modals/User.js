import React from 'react';
import { Modal } from '../../styles/GlobalComponents'

const User = () => {
    return (
        <Modal>
            <div>
                <p>username</p>
                <img src='' alt=''/>
                { false ? [].map((image, key) => <img src={image} alt='' key={key} />) : null}
                <a href='#'>User's profile</a>
            </div>
        </Modal>
    )
}

export default User