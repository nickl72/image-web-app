import React from 'react'
import { StyledHeader } from '../styles/Header'

const Header = () => {
    return(
        <StyledHeader>
            <h1>Images</h1>
            <input type='text' placeholder='Search' />
            <a href='#'>Log In</a>
        </StyledHeader>
    )
}

export default Header