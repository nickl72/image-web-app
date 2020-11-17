import React from 'react';
import styled from 'styled-components';

const Div = styled.div.attrs(({props}) => ({
    style: {
        width: props.width,
        height: props.height,
        top:  props.top,
        left: props.left
    }}))`
        position: fixed;
        z-index: 1;
        background: rgba(100,100,100,0);
        border: 1px solid black;
        min-height: 0 !important;
    `

const Crop = (props) => {
    console.log(props)

    const theme = {
        top: `${props.top}px`,
        left: `${props.left}px`,
        width: `${props.width}px`,
        height: `${props.height}px`
    }
    return (
            <Div props={props}/>
    )
}

export default Crop

