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

export const Anchor = styled.div`
    text-decoration: none;
    background: ${colors.green};
    color: ${colors.white};
    padding: 1em;
    border-radius: 3px;
    box-shadow: 2px 2px 2px 2px rgba(${colors.rgb.green},.5);
    cursor: pointer;
    &:hover {
        box-shadow: none;
    }
`