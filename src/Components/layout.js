import styled from 'styled-components'

export const Grid = styled.div`
    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: space-around;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const Column = styled.div`
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding-top: 2em;
        padding-bottom: 2em;
        padding-left: 0em;
        padding-right: 0em;
    }
    width: ${({ width }) => width}%;
    padding: 2em;
`

export const View = styled.div`
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }

    width: 80vw;
    margin: auto;
    padding: 1em;
`
