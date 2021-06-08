import React from 'react'
import { Menu, Dropdown } from 'antd'
import defaultUserIcon from '../Assets/Images/avatar.png'
import { useUserProvider } from '../Hooks/user'
import { useHistory } from 'react-router-dom'
import { SettingFilled, LogoutOutlined } from '@ant-design/icons'

export default function UserMenu() {
    const { user, logout } = useUserProvider()
    const history = useHistory()
    const AccountMenu = (
        <Menu>
            <Menu.Item
                onClick={(e) => history.push('settings')}
                icon={<SettingFilled />}
            >
                Settings
            </Menu.Item>
            <Menu.Item onClick={(e) => logout()} icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={AccountMenu}>
            <img
                src={user.photoUrl ? user.photoUrl : defaultUserIcon}
                className="user-icon"
            />
        </Dropdown>
    )
}
