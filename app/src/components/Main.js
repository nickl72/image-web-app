import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice'

import Home from './Home';


const Main = () => {
    const user = useSelector(selectUser)
    return (
        <main>
            { !user && <Home/>}
        </main>
    )
}

export default Main