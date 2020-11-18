import styled from 'styled-components';
import colors from './colors';

export const LgModal = styled.div`
    height: 80vh;
    width: 75vw;
    text-align: center;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
        margin: 10px;
    }
    .image-container {
        margin: 0;
        padding: 0;
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: none;
    }
    img {
        margin: 10px 30px;
        max-height: 100%;
        height: auto;
        max-width: 75%;
        width: auto;
        box-shadow: 2px 2px 8px 2px ${colors.black};
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
            background: none;
            box-shadow: none;
        }
    }
`