import React from 'react';

const User = () => {
    return (
        <div>
            <div>
                <p>username</p>
                <img src='' alt=''/>
                { false ? [].map((image, key) => <img src={image} alt='' key={key} />) : null}
                <a href='#'>User's profile</a>
            </div>
        </div>
    )
}

export default User