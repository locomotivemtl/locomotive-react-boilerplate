import React from 'react'

import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import svg4everybody from 'svg4everybody'

import createRootReducer from './reducers'

import App from './components/App'

const history = createBrowserHistory()
const middleware = [routerMiddleware(history), createLogger({ collapsed: true }), thunk]
const store = createStore(createRootReducer(history), applyMiddleware(...middleware))

svg4everybody()
render(
    <Provider store={store}>
        <App history={history} location={history.location} />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
