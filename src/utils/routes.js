import routes from '../config/routes.json'

/**
 * Render a route according to a route identifier and parameter data.
 */
export const renderRoute = (routeId, substr = '', newSubStr = '') => {
    if (!(routeId in routes)) {
        return ''
    }

    if (substr !== '' && newSubStr !== '') {
        return routes[routeId].slug.replace(substr, newSubStr)
    } else if (typeof routes[routeId].url !== 'undefined') {
        return routes[routeId].url
    } else {
        return routes[routeId].slug
    }
}
