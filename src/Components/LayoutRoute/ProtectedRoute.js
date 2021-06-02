import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserProvider } from '../../Hooks/user'

export default function ProtectedRoute({ component, Layout, exact, path }) {
    const { user } = useUserProvider()
    console.log(user)
    return (
        <Layout>
            {user.loggedIn === true ? (
                <Route exact={exact} path={path} component={component} />
            ) : (
                <Redirect to="login" />
            )}
        </Layout>
    )
}
