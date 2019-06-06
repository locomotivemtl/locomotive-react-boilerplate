import _ from 'lodash'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import { renderRoute } from '../utils/routes'
import NotFoundView from '../views/NotFoundView'

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticatedRedir = connectedRouterRedirect({
    authenticatedSelector: state => state.auth.user !== null,
    redirectPath: renderRoute('account-login'),
    wrapperDisplayName: 'UserIsAuthenticated',
})

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
    allowRedirectBack: false,
    authenticatedSelector: state => state.auth.user === null,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    wrapperDisplayName: 'UserIsNotAuthenticated',
})

export const userIsAuthenticatedAndCanViewRoute = (action) => {
    return connectedAuthWrapper({
        authenticatedSelector: state => state.auth.user !== null && userCanDo(state.auth.user, action),
        FailureComponent: NotFoundView
    })
}

/**
 * Determine if a user can perform a certain action.
 *
 * @param {object} user
 * @param {string} action
 * @return {boolean}
 */
export const userCanDo = (user, action) => {
    let canDo = _.includes(user.role.rules, `allow.${action}`) || user.role.isSuperuser

    /** Check for denied rules */
    if (canDo && user.role.isSuperuser) {
        if (_.includes(user.role.rules, `deny.${action}`)) {
            return false
        }
    }

    return canDo
}
