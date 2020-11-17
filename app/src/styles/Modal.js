import styled from 'styled-components';
import colors from './colors';

export const LgModal = styled.div`
    height: 80vh;
    width: 75vw;
    text-align: center;
    div {
        height: 70vh;
        width: 65vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: none;
        a {
            cursor: pointer;
            &:active {

            }
        }
    }
    img {
        margin: 10px 30px;
        max-height: 70vh;
        height: auto;
        max-width: 60vw;
        width: auto;
        box-shadow: 2px 2px 8px 2px ${colors.black};
    }
    form {
        display: flex;
        justify-content: space-evenly;
    }
`