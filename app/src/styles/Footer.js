import styled from 'styled-components'
import colors from './colors'

export const StyledFooter = styled.footer`
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: ${colors.lava};
    color: ${colors.white};
    a {
        color: ${colors.white};
    }
`