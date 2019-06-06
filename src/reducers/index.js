import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { requestStates } from './api'
import { auth } from './auth'

export default (history) => combineReducers({
    router: connectRouter(history),
    auth,
    requestStates,
})
