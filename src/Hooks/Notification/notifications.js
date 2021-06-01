import React, { useState, useEffect, createContext, useContext } from 'react'

export default function useNotifications() {
    const [notifications, setNotifications] = useState([])

    const removeAtIndex = (index) => {
        setNotifications([
            ...notifications.slice(0, index),
            ...notifications.slice(index, notifications.length - 1),
        ])
    }

    const addNotification = (message, level) => {
        setNotifications([...notifications, { message: message, level: level }])
    }

    return { notifications, removeAtIndex, addNotification }
}

const NotificationContext = createContext()

export function NotificationProvider({ children }) {
    const notifications = useNotifications()
    return (
        <NotificationContext.Provider value={notifications}>
            {children}
        </NotificationContext.Provider>
    )
}

export function useNotificationProvider() {
    const context = useContext(NotificationContext)
    if (context === undefined) {
        throw new Error('Notification context has not been defined')
    }

    return context
}
