import routes from '../config/routes.json'

function normalizeRouteData(data) {
    const defaultData = {
        id: '',
        bind: '',
        param: '',
    }

    if (typeof data === 'object') {
        return { ...defaultData, ...data }
    } else {
        return { ...defaultData, ...{ id: data } }
    }
}

/**
 * Render a route according to a route identifier and parameter data.
 */
export const renderRoute = routeData => {
    const { id, bind, param } = normalizeRouteData(routeData)

    if (!(id in routes)) {
        return ''
    }

    if (bind !== '' && param !== '') {
        return routes[id].path.replace(`:${bind}`, param)
    } else if (typeof routes[id].url !== 'undefined') {
        return routes[id].url
    } else {
        return routes[id].path
    }
}

/**
 * Render an absolute URL according to a route identifier and parameter data.
 */
export const renderAbsoluteRoute = routeData => {
    const origin = window.location.origin
    const route = renderRoute(routeData)
    return `${origin}${route}`
}
