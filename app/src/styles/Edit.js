import styled from 'styled-components';
import colors from './colors';

export const Edit = styled.div`
    flex-grow: 1;
    height: 100%;
    padding: 10px;
    display: flex;
    .edit-controls {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }


    .image {
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
    form {
        margin: 10px;
        display: flex;
        flex-direction: column;
    }
    span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1em;
        margin-top: 1.2em;
        input {
            margin-right: 1em;
            width: 3.5em;
        }
    }
    .color {
        margin-top: 1.5em;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .crop {
        margin: 2em;
    }
    .live {
        justify-content: center;
    }
    h2 {
        margin-bottom: -.3em;
    }
    .color-input {
        margin: 0;
    }
`

// export const Image = styled.img.attrs(props => ({
//     style: {
//         height:  ((props.height > props.width) ? '100%' : 'auto'),
//         width: ((props.height > props.width) ? 'auto' : '100%')
//     }
// }))
