import styled from 'styled-components';

export const Modal = styled.div`
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const FullScreenModal = styled(Modal)`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
`

