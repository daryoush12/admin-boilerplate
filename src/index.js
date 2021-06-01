import ReactDOM from 'react-dom'
import React from 'react'
import App from './Views/index'
import store from '@Store/'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './Config/theme'
import 'antd/dist/antd.css'
import './main.less'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App></App>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
