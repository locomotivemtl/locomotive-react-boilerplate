import React from 'react'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import svg4everybody from 'svg4everybody'

import { history, store } from './store'

import { App } from './components/App'

svg4everybody()
render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
