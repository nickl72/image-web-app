import styled from 'styled-components';
import colors from './colors';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    input {
        margin: 1em;
    }
    a {
        cursor: pointer;
        &:hover {
            color: ${colors.blue}
        }
    }

`
export const Input = styled.input`
    padding: .2em;
    font-size: large;
    box-shadow: 1px 1px 5px 1px ${colors.black} inset;
    border-radius: 3px;
    line-height: 2.5em;
    width: 30em;
`
