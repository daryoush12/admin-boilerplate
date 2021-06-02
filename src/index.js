import ReactDOM from 'react-dom'
import React from 'react'
import App from './Views/index'
import store from '@Store/'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './Config/theme'
import 'antd/dist/antd.css'
import './main.less'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './Config/firebase'
import { NotificationProvider } from './Hooks/Notification/notifications'
import { UserProvider } from './Hooks/user'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <UserProvider>
                <NotificationProvider>
                    <App></App>
                </NotificationProvider>
            </UserProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
