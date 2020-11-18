import React from 'react'
import { Link } from 'react-router-dom';
import { StyledFooter } from '../../styles/Footer'

const Footer = () => {
    return (
        <StyledFooter>
            <Link to='/about'>About</Link>
            <p>&copy;2020 <br/>Created by Nick LaPointe</p>
            <a href='https://github.com/nickl72/image-web-app-frontend/issues' target='_blank' >Report Issues</a>
        </StyledFooter>
    )
}

export default Footer