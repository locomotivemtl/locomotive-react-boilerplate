import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { requestStates } from './api'

export default (history) => combineReducers({
    router: connectRouter(history),
    requestStates,
})
