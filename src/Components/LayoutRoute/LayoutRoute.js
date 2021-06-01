import React from 'react'
import { Route } from 'react-router-dom'

export default function LayoutRoute({ component, Layout, exact, path }) {
    return (
        <Layout>
            <Route exact={exact} path={path} component={component}></Route>
        </Layout>
    )
}
