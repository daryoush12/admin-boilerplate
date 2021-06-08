import React, { useState, useContext } from 'react'
import { Input, Button, Divider, Typography } from 'antd'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { useUserProvider } from '../../Hooks/user'
import { Link } from 'react-router-dom'
import { Card, Spin } from 'antd'
import { notification } from 'antd'

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Login Success',
        description: 'Wow you have successfully logged in.',
    })
}

export default function Login() {
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const { user, authenticate } = useUserProvider()

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        authenticate(form.email, form.password).then(() => {
            openNotificationWithIcon('success')
            history.push('/')
        })
    }

    const handleInput = (e) => {
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Card className="login-card">
            {!loading ? (
                <>
                    <div className="container-flex">
                        <div className="login-header">
                            <div className="logo" />
                            <Typography.Title className="login-title">
                                Dashboard
                            </Typography.Title>
                        </div>
                        <Divider />
                        <div>
                            <label htmlFor="email">Username</label>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                onChange={handleInput}
                            />
                            <div class="forgot-password">
                                <Link to="/recover">Forgot password?</Link>
                            </div>
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
                    </div>
                    <div className="forgot-section">
                        <Link to="/register">Dont have a account yet?</Link>
                    </div>
                </>
            ) : (
                <div className="center">
                    <Spin />
                </div>
            )}
        </Card>
    )
}
