import { push } from 'connected-react-router'
import { apiClient } from '../helpers/ApiClient'

export const AUTH_SIGN_OUT   = 'AUTH_SIGN_OUT'
export const AUTH_SET_TOKENS = 'AUTH_SET_TOKENS'

/**
 * Create a new login session, authenticating a specific user. Redux states to be handled in
 * component.
 */
export const CREATE_USER_LOGIN_REQUEST = 'CREATE_USER_LOGIN_REQUEST'
export const CREATE_USER_LOGIN_SUCCESS = 'CREATE_USER_LOGIN_SUCCESS'
export const CREATE_USER_LOGIN_FAILURE = 'CREATE_USER_LOGIN_FAILURE'
export const login = (email, password) => {
    return {
        types: [ CREATE_USER_LOGIN_REQUEST, CREATE_USER_LOGIN_SUCCESS, CREATE_USER_LOGIN_FAILURE ],
        promise: (client) => client.post('users/login', { email, password })
    }
}

/**
 * Delete a login session, unauthenticating the authenticated user.
 */
export const DELETE_USER_LOGIN_REQUEST = 'DELETE_USER_LOGIN_REQUEST'
export const DELETE_USER_LOGIN_SUCCESS = 'DELETE_USER_LOGIN_SUCCESS'
export const DELETE_USER_LOGIN_FAILURE = 'DELETE_USER_LOGIN_FAILURE'
export const logout = () => (dispatch) => {
    dispatch({ type: DELETE_USER_LOGIN_REQUEST })

    apiClient
        .delete('users/login').then(response => {
            dispatch({ type: DELETE_USER_LOGIN_SUCCESS })
            localStorage.removeItem('token')
            dispatch(push('/'))
        })
        .catch(error => {
            dispatch({ type: DELETE_USER_LOGIN_FAILURE })
            console.log('Something went wrong trying to log out.')
        })
}

/**
 * Retrieve the authenticated user's profile.
 */
export const FETCH_USER_SELF_REQUEST = 'FETCH_USER_SELF_REQUEST'
export const FETCH_USER_SELF_SUCCESS = 'FETCH_USER_SELF_SUCCESS'
export const FETCH_USER_SELF_FAILURE = 'FETCH_USER_SELF_FAILURE'
export function fetchSelf() {
    return {
        types: [ FETCH_USER_SELF_REQUEST, FETCH_USER_SELF_SUCCESS, FETCH_USER_SELF_FAILURE ],
        promise: (client) => client.get('users/self')
    }
}
