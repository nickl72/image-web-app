import styled from 'styled-components';
import colors from './colors';

export const Modal = styled.div`
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    div {
        background: ${colors.white};
        padding: 25px;
        border-radius: 3px;
        box-shadow: 2px 2px 20px 2px gray;
    }
`

export const FullScreenModal = styled(Modal)`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
`

