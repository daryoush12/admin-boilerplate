import React, { useState, useContext } from 'react'
import { Input, Button, Divider } from 'antd'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { useNotificationProvider } from '../../Hooks/Notification/notifications'
import { useUserProvider } from '../../Hooks/user'

export default function Login() {
    const [form, setForm] = useState({})
    const history = useHistory()

    const { user, authenticate } = useUserProvider()
    const { addNotification } = useNotificationProvider()

    const submitForm = (e) => {
        e.preventDefault()
        authenticate(form.email, form.password)
        addNotification('Login success.', 'INFO')
    }

    const handleInput = (e) => {
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="LoginCard">
            <div className="container-flex">
                <div className="login-header">
                    <div className="logo" />
                </div>
                <Divider />
                <div>
                    <label htmlFor="email">Username</label>
                    <Input type="email" name="email" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        name="password"
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        className="login-button"
                        onClick={submitForm}
                    >
                        Login
                    </Button>
                </div>

                <div className="forgot-section">
                    <a>Recover</a> <div>|</div> <a>Register</a>
                </div>
            </div>
        </div>
    )
}
