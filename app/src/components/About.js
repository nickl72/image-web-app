import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
height: 80%;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3 {
    text-justify: center;
    text-align: center;
    max-width: 75%;
    font-size: large;
}
`

const About = () => {
    return (
        <Div>
            <h2>Welcome to Flow Images!</h2>
            <h3>
                Flow Images is a tool to edit images, and can even convert your images to ASCII.
                 Future updates will apply styles from one image to another, allowing you to create new and unique works of art.
            </h3>
            <p>
                If you don't see an image you like here, visit <a href='https://unsplash.com/' target='_blank'>Unsplash</a> to find more free images.
            </p>
        </Div>
    )
}

export default About;