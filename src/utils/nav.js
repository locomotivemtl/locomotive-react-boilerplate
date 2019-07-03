import _ from 'lodash'

import navConfig from '../config/nav.json'
import { renderRoute } from './routes'

/**
 * Determine if a nav item is active based on the pathname.
 *
 * @param  {Object}  item
 * @param  {String}  pathname
 * @return {Boolean}
 */
function isNavItemActive(item, pathname) {
    if (_.isArray(item.match) && !_.isEmpty(item.match)) {
        const matched = _.find(item.match, function(match) {
            const regex = new RegExp(`^${renderRoute(match)}$`)
            return regex.test(pathname)
        })
        return typeof matched !== 'undefined'
    } else if (!_.isEmpty(item.url)) {
        return item.url === pathname
    } else {
        return false
    }
}

/**
 * Format a list of nav items based on the current pathname and their children or lack of.
 *
 * @param  {Array}  items
 * @param  {String} pathname
 * @return {array}
 */
function parseNavItemsForActiveState(items, pathname) {
    return items.map(item => {
        item.isActive = isNavItemActive(item, pathname)
        item.hasActiveNavItems = false

        if (_.isArray(item.items)) {
            item.items = parseNavItemsForActiveState(item.items, pathname)
            const hasActiveNavItems = item.items.filter(item => item.isActive || item.hasActiveNavItems).length > 0
            item.hasActiveNavItems = hasActiveNavItems
        }

        return item
    })
}

function parseNavItemsRenderUrl(items) {
    return items.map(item => {
        /** Don't attempt to render a route if the URL is present */
        if (typeof item.route !== 'undefined') {
            item.url = renderRoute(item.route)
        }

        if (_.isArray(item.items)) {
            item.items = parseNavItemsRenderUrl(item.items)
        }

        return item
    })
}

/**
 * Retrieve a list of account nav items based on current pathname and current role.
 *
 * @param  {String} pathname
 * @param  {String} role
 * @return {array}
 */
export function renderNavItems(pathname) {
    return parseNavItemsForActiveState(
        parseNavItemsRenderUrl([ ...navConfig ]),
        pathname
    )
}
