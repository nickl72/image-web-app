import styled from 'styled-components';
import colors from './colors';

export const Modal = styled.div`
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

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
    img {
        max-width: 75vw;
        height: auto;
    }
`

const defaultClickable = `
    text-decoration: none;
    background: ${colors.green};
    color: ${colors.white};
    padding: 1em;
    border-radius: 3px;
    box-shadow: 2px 2px 2px 2px rgba(${colors.rgb.lava},.5);
    cursor: pointer;
    font-size: large;
    font-weight: 700;
    &:hover {
        box-shadow: none;
    }
    &:active {
        box-shadow: 2px 2px 2px 2px rgba(${colors.rgb.lava},.5) inset;
    }
`
export const Anchor = styled.a`
    ${defaultClickable}
`

export const Button = styled.button`
    ${defaultClickable}
`

export const Submit = styled.input`
    ${defaultClickable}
`
