import { AUTH_SIGN_OUT, AUTH_SET_TOKENS } from '../actions/userActions'

/**
 * @see http://nmajor.com/posts/access-and-refresh-token-handling-with-redux
 */
export default function createApiClientMiddleware(client) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState)
            }

            const { promise, types, ...rest } = action
            if (!promise) {
                return next(action)
            }

            client.accessToken = (getState().auth.tokens || {}).access_token

            const [REQUEST, SUCCESS, FAILURE] = types
            next({ ...rest, type: REQUEST })

            let actionPromise = Promise.resolve()
            const { tokens } = getState().auth
            const refreshThreshold = (new Date().getTime() + 300000) // 5 minutes from now

            if (
                typeof tokens !== 'undefined' &&
                tokens.access_token &&
                refreshThreshold > (tokens.expires_at * 1000)
            ) {
                actionPromise = client.post('users/login/refresh')
                    .then(
                        result => {
                            client.accessToken = result.access_token
                            return next({
                                ...rest, result, type: AUTH_SET_TOKENS,
                            })
                        },
                        errors => next({
                            ...rest, errors, type: AUTH_SIGN_OUT,
                        })
                    )
                    .then(() => promise(client))
            } else {
                actionPromise = promise(client)
            }

            actionPromise.then(
                result => next({ ...rest, result, type: SUCCESS }),
                error  => next({ ...rest, error, type: FAILURE })
            ).catch( error => {
                next({ ...rest, error, type: FAILURE })
            })

            return actionPromise
        }
    }
}
