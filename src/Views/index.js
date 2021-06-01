import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutRoute from '@Components/LayoutRoute/LayoutRoute'
import ProtectedRoute from '@Components/LayoutRoute/ProtectedRoute'
import Default from '../Layouts/Default'
import Empty from '../Layouts/Empty'

import Home from './Home'
import Login from './Login'

function App() {
    return (
        <Router>
            <Switch>
                <ProtectedRoute
                    exact
                    path="/"
                    component={Home}
                    Layout={Default}
                />
                <LayoutRoute
                    exact
                    path="/login"
                    component={Login}
                    Layout={Empty}
                />
            </Switch>
        </Router>
    )
}

export default App
