import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice'

import EditImage from '../EditImage';
import Home from '../Home';


const Main = () => {
    const user = useSelector(selectUser)
    return (
        <main>
            { !user && <Home/>}
            { !user && <EditImage />}
        </main>
    )
}

export default Main