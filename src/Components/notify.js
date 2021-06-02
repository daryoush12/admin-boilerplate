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
                    <span key={index}>
                        {notification.level === levels.INFO && (
                            <Alert
                                message={notification.message}
                                type="success"
                                showIcon
                                onClose={removeAtIndex(index)}
                            />
                        )}
                    </span>
                ))}
        </div>
    )
}
