import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { requestStates } from './api'

const appReducer = history =>
    combineReducers({
        router: connectRouter(history),
        requestStates,
    })

// If you want to keep some data in store on USER_LOGOUT,
// here is where you do it.
const rootReducer = history => (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        // const { dataToKeep } = state
        // state = { dataToKeep }
    }
    return appReducer(history)(state, action)
}

export default rootReducer
