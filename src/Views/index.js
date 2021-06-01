import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LayoutRoute from '@Components/LayoutRoute/LayoutRoute'
import Default from '../Layouts/Default'

import Home from './Home'

function App() {
    return (
        <Router>
            <Switch>
                <LayoutRoute exact path="/" component={Home} Layout={Default} />
            </Switch>
        </Router>
    )
}

export default App
