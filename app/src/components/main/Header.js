import React from 'react'
import axios from 'axios'
// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {
    const callpython = () => {
        axios.post('/python.py')
    }
    return(
        <StyledHeader>
            <h1>Flow Images</h1>
            <input type='text' placeholder='Search' />
            <Anchor href='#' onClick={callpython}>Log In</Anchor>
        </StyledHeader>
    )
}

export default Header