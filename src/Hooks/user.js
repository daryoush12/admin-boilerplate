import React, { useState, createContext, useContext, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../Config/firebase'
import { useCookies } from 'react-cookie'

const app = firebase.initializeApp(firebaseConfig)

export default function useUser() {
    const [cookies, setCookie, removeCookie] = useCookies()

    const user = cookies['user'] || {
        data: null,
        loggedIn: false,
    }

    useEffect(() => {}, [])

    const authenticate = async (email, password) => {
        await app
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                let userObject = {
                    loggedIn: true,
                    data: user.user.providerData[0],
                }
                setCookie('user', userObject)
            })
            .catch((e) => console.log(e.message))
    }

    const logout = async () => {
        await removeCookie('user')
    }
    return { user, authenticate, logout }
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
