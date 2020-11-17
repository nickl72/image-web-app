import styled from 'styled-components';
import colors from './colors';

export const Image = styled.img`
    height: 400px;
    width: 400px;
    overflow: hidden;
    margin: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px ${colors.black};
    cursor: pointer;
    &:hover {
        box-shadow:4px 4px 12px 4px ${colors.black};
    }
    &:active {
        box-shadow: none;
    }
`
export const StyledHome = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`