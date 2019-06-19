import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import svg4everybody from 'svg4everybody';

import React from 'react'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import createApiClientMiddleware from './middlewares/createApiClientMiddleware'
import { apiClient } from './helpers/ApiClient'
import { fetchSelf } from './actions/userActions'
import App from './components/App'

const history = createBrowserHistory()
const middleware = [ createApiClientMiddleware(apiClient), routerMiddleware(history), createLogger({ collapsed: true }), thunk ]
const store = createStore(
    createRootReducer(history),
    applyMiddleware(...middleware),
)

function setAuthState(state) {
    try {
        localStorage.setItem('state.auth.tokens', JSON.stringify((state.auth || {}).tokens))
    } catch (error) { return undefined }
}

/** Subscribe to auth state changes */
store.subscribe(() => {
    // console.log('store.subscribe')
    setAuthState(store.getState())
})

/** Initial authentication check before anything renders. */
store.dispatch(fetchSelf()).then(response => {
    /** Do nothing. */
}).catch(error => {
    /** Clean the existing token. */
    localStorage.removeItem('state.auth.tokens')
}).then(() => {
    svg4everybody();
    render(
        <Provider store={store}>
            <App history={history} location={history.location} />
        </Provider>,
        document.getElementById('root')
    )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
