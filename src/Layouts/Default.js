import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { HiMenu } from 'react-icons/hi'
import Slide from 'react-reveal/Slide'
import { NavBar, NavButton, SideBar } from '@Components/navigation'
import { Text } from '@Components/text'

export default function Default({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function openSidebar(e) {
        e.preventDefault()
        if (sidebarOpen) setSidebarOpen(false)
        else setSidebarOpen(true)
    }

    return (
        <>
            <NavBar>
                <NavButton onClick={openSidebar}>
                    <HiMenu style={{ width: '45px', height: '45px' }} />
                </NavButton>
            </NavBar>
            <SideBar isOpen={sidebarOpen}>
                <Text>NavigationBar</Text>
            </SideBar>
            {children}
            <div>Footer of Main</div>
        </>
    )
}
