import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'
import { Route, Switch } from 'react-router';

import EditImage from '../EditImage';
import Home from '../Home';


const Main = () => {
    const user = useSelector(selectUser)
    return (
        <main>
            <Switch >
                <Route path='/edit' component={EditImage} />
                <Route path='/' component={Home} />
            </Switch>
        </main>
    )
}

export default Main