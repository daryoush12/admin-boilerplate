import React from 'react'
import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'
import defaultUserIcon from '../Assets/Images/avatar.png'
import { useUserProvider } from '../Hooks/user'

export default function UserMenu() {
    const { user, logout } = useUserProvider()
    const AccountMenu = (
        <Menu>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item onClick={(e) => logout()}>Logout</Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={AccountMenu}>
            <img
                src={user.data.photoUrl ? user.data.photoUrl : defaultUserIcon}
                className="user-icon"
            />
        </Dropdown>
    )
}
