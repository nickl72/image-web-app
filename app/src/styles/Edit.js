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
            max-width: 100%;
            width: auto;
            cursor: crosshair;
        }
    }
    div {
        min-height: 100%;
    }
`

// export const Image = styled.img.attrs(props => ({
//     style: {
//         height:  ((props.height > props.width) ? '100%' : 'auto'),
//         width: ((props.height > props.width) ? 'auto' : '100%')
//     }
// }))
