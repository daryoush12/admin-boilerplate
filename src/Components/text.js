import styled from 'styled-components'

export const Text = styled.span`
    color: ${(props) => props.theme.text};
    width: 100%;
    font-size: 24px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    text-align: ${({ centered }) => (centered ? 'center' : 'initial')};
    display: block;
`
