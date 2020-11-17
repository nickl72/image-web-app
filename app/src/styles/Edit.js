import styled from 'styled-components';
import colors from './colors';

export const Edit = styled.div`
    /* flex-grow: 1; */
    height: 100%;
    margin: 10px;
    display: flex;


    .image {
        /* background: ${colors.black}; */
        flex-grow: 1;
        display: flex;
        justify-content: center;
        box-shadow: inset 2px 2px 10px 2px black;
        padding: 10px;
        img {
            min-height: 100%;
            width: auto;
        }
    }
    div {
        min-height: 100%;
    }
`