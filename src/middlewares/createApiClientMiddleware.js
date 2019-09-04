import _ from 'lodash'

import { findActionTypeMatches } from '../reducers/api'

export default function createApiClientMiddleware(client) {
    return ({ dispatch, getState }) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState)
            }

            const { promise, types, ...rest } = action
            if (!promise) {
                return next(action)
            }

            const [REQUEST, SUCCESS, FAILURE, PENDING] = types

            const matches = findActionTypeMatches(REQUEST)
            if (!_.isEmpty(matches)) {
                const [, requestName] = matches
                if (getState().requestStates[requestName] === true) {
                    return next({ type: PENDING })
                }
            }

            next({ ...rest, type: REQUEST })

            const actionPromise = promise(client)
            actionPromise
                .then(
                    result => next({ ...rest, result, type: SUCCESS }),
                    error => next({ ...rest, error, type: FAILURE })
                )
                .catch(error => {
                    next({ ...rest, error, type: FAILURE })
                })

            return actionPromise
        }
    }
}
