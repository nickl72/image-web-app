import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Div = styled.div.attrs(({props}) => ({
    style: {
        width: props.width,
        height: props.height,
        top:  props.top,
        left: props.left
    }}))`
        position: fixed;
        z-index: 1;
        background: rgba(100,100,100,.5);
    `


const Crop = (props) => {
    // console.log(props)
    const theme = {
        top: `${props.top}px`,
        left: `${props.left}px`,
        width: `${props.width}px`,
        height: `${props.height}px`
    }
    return (
        <ThemeProvider theme={theme}>
            <Div props={props}/>
        </ThemeProvider>
    )
}

export default Crop

// Over 200 classes were generated for component styled.div with the id of "sc-bXDlPE".
// Consider using the attrs method, together with a style object for frequently changed styles.
// Example:
//   const Component = styled.div.attrs(props => ({
//     style: {
//       background: props.background,
//     },
//   }))`width: 100%;`
