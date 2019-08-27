import {
    AUTH_SIGN_OUT,
    AUTH_SET_TOKENS,
    CREATE_USER_LOGIN_REQUEST,
    CREATE_USER_LOGIN_SUCCESS,
    CREATE_USER_LOGIN_FAILURE,
    DELETE_USER_LOGIN_REQUEST,
    DELETE_USER_LOGIN_SUCCESS,
    DELETE_USER_LOGIN_FAILURE,
    FETCH_USER_SELF_REQUEST,
    FETCH_USER_SELF_SUCCESS,
    FETCH_USER_SELF_FAILURE,
} from '../actions/userActions'

const getAuthState = function() {
    try {
        return {
            tokens: JSON.parse(localStorage.getItem('state.auth.tokens')) || undefined,
        }
    } catch (error) {
        return {}
    }
}

const initialState = {
    // isAuthenticated: false,
    isAuthenticated: true,
    tokens: {},
    user: {},
    ...getAuthState(),
}

export function auth(state = initialState, action) {
    switch (action.type) {
        /**
         * Manage authentication.
         */
        case AUTH_SET_TOKENS:
            return {
                ...state,
                tokens: action.result.data,
            }

        /**
         * Create a new login session, authenticating a specific user.
         */
        case CREATE_USER_LOGIN_REQUEST:
            return {
                ...state,
            }
        case CREATE_USER_LOGIN_SUCCESS:
            return {
                ...state,
                tokens: action.result.data,
            }
        case CREATE_USER_LOGIN_FAILURE:
            return {
                ...state,
                tokens: {},
            }

        /**
         * Delete a login session, unauthenticating the authenticated user.
         */
        case DELETE_USER_LOGIN_REQUEST:
            return {
                ...state,
            }
        case AUTH_SIGN_OUT:
        case DELETE_USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                tokens: {},
                user: null,
            }
        case DELETE_USER_LOGIN_FAILURE:
            return {
                ...state,
            }

        /**
         * Retrieve the authenticated user's profile.
         */
        case FETCH_USER_SELF_REQUEST:
            return {
                ...state,
            }
        case FETCH_USER_SELF_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.result.data,
            }
        case FETCH_USER_SELF_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                tokens: {},
                user: null,
            }
        default:
            return state
    }
}
