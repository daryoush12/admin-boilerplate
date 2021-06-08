import React from 'react'
import UserDetail from '@Components/UserDetail'
import AvatarChanger from '@Components/AvatarChanger'

export default function Settings() {
    return (
        <div className="view">
            <div className="view-row ">
                <UserDetail />
                <AvatarChanger />
            </div>
        </div>
    )
}
