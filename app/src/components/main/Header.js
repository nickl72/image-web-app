import React from 'react'
// styles
import { StyledHeader } from '../../styles/Header'
import { Anchor } from '../../styles/GlobalComponents'

const Header = () => {
    return(
        <StyledHeader>
            <h1>Images</h1>
            <input type='text' placeholder='Search' />
            <Anchor href='#'>Log In</Anchor>
        </StyledHeader>
    )
}

export default Header