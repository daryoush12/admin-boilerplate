import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutRoute from '@Components/LayoutRoute/LayoutRoute'
import ProtectedRoute from '@Components/LayoutRoute/ProtectedRoute'
import Default from '../Layouts/Default'
import Empty from '../Layouts/Empty'

import Home from './Home'
import Login from './Login'
import Edit from './Event/edit'
import Events from './Event'
import Register from './Register'
import Settings from './Settings'
import Recover from './Recover'

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
                <ProtectedRoute
                    exact
                    path="/events"
                    component={Events}
                    Layout={Default}
                />

                <ProtectedRoute
                    exact
                    path="/edit"
                    component={Edit}
                    Layout={Default}
                />

                <ProtectedRoute
                    exact
                    path="/settings"
                    component={Settings}
                    Layout={Default}
                />
                <LayoutRoute
                    exact
                    path="/login"
                    component={Login}
                    Layout={Empty}
                />
                <LayoutRoute
                    exact
                    path="/register"
                    component={Register}
                    Layout={Empty}
                />

                <LayoutRoute
                    exact
                    path="/recover"
                    component={Recover}
                    Layout={Empty}
                />
            </Switch>
        </Router>
    )
}

export default App
