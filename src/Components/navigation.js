import React from 'react'
import styled from 'styled-components'
import Slide, { withReveal } from 'react-reveal/Fade'
import PropTypes from 'prop-types'

export const NavBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: #000000;
    color: white;
`

export const NavButton = styled.div`
    @media only screen and (max-width: 768px) {
        border: none;
        background-color: transparent;
        color: white;
        display: block;
    }
    display: none;
`

const SlideContainer = styled.div`
    @media only screen and (min-width: 200px) {
        height: 95vh;
        width: 55vw;
        background-color: #000000;
    }

    @media only screen and (min-width: 478px) {
        height: 95vh;
        width: 50vw;
        background-color: #000000;
    }

    @media only screen and (min-width: 900px) {
        height: 95vh;
        width: 50vw;
        background-color: #000000;
    }
    height: 95vh;
    width: 30vw;
    background-color: #000000;
    position: absolute;
`

export function SideBar({ isOpen, children }) {
    return (
        <Slide left when={isOpen}>
            <SlideContainer>{children}</SlideContainer>
        </Slide>
    )
}

SideBar.propTypes = {
    isOpen: PropTypes.bool,
}

SideBar.defaultProps = {
    isOpen: false,
}
