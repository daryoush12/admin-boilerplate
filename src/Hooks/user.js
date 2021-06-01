import React, { useState, createContext, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../Config/firebase'

const app = firebase.initializeApp(firebaseConfig)

export default function useUser() {
    const [user, setUser] = useState({
        data: null,
        loggedIn: false,
    })

    const authenticate = (email, password) => {
        app.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                setUser({
                    loggedIn: true,
                    data: user.user.providerData[0],
                })
            })
    }

    return { user, authenticate }
}

const UserContext = createContext()

export function UserProvider({ children }) {
    const user = useUser()
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function useUserProvider() {
    if (UserContext === undefined) {
        throw new Error('Notification context has not been defined')
    }

    return useContext(UserContext)
}
