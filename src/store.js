import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import createApiClientMiddleware from './middlewares/createApiClientMiddleware'
import { apiClient } from './helpers/ApiClient'
import createRootReducer from './reducers'

const history = createBrowserHistory()

const middleware = [
    createApiClientMiddleware(apiClient),
    routerMiddleware(history),
    createLogger({ collapsed: true }),
    thunk,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(...middleware))
)

apiClient.setStore(store)

export { history, middleware, store }
