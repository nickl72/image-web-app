import React from 'react'
import { Route, Switch } from 'react-router';

// Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'
import { selectActiveImage } from '../../features/activeImageSlice';

// Components
import EditImage from '../EditImage';
import Home from '../Home';
import Profile from '../Profile';
import LargeImage from '../Modals/LargeImage';


const Main = () => {
    const user = useSelector(selectUser)
    const activeImage = useSelector(selectActiveImage)
    return (
        <main>
            {activeImage.modal && <LargeImage />}
            <Switch>
                <Route path='/edit' component={EditImage} />
                <Route path='/profile' component={Profile} />
                <Route path='/' component={Home} />
            </Switch>
        </main>
    )
}

export default Main