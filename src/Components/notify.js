import React, { useContext } from 'react'
import { Alert, notification } from 'antd'
import { useNotificationProvider } from '../Hooks/Notification/notifications'
import * as levels from '../Hooks/Notification/levels'

export default function Notify() {
    const { notifications, removeAtIndex } = useNotificationProvider()
    return (
        <div>
            {notifications.length > 0 &&
                notifications.map((notification, index) => (
                    <>
                        {notification.level === levels.INFO && (
                            <Alert
                                key={index}
                                message={notification.message}
                                type="success"
                                showIcon
                                onClose={removeAtIndex(index)}
                            />
                        )}
                    </>
                ))}
        </div>
    )
}
