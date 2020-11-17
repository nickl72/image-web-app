import styled from 'styled-components';
import colors from './colors';

export const StyledHeader = styled.header`
    padding: 0 1em;
    background-color: ${colors.purple};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.black};
    a {
        text-decoration: none;        
    }
    a h1 {
        color: ${colors.black};
    }
    button {
        margin: 10px;
    }
`