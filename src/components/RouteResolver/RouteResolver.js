import React from 'react'

import _ from 'lodash'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import routes from '../../config/routes.json'

import * as Views from '../../views'

// This component allows us to define all routes through routes.json.
// Using this config format allows us to centralize slugs and their related view component.
const RouteResolver = () => {
    let views = []
    _.forOwn(routes, (route, key) => {
        const componentIdent = _.has(route, 'component')
            ? route.component
            : _.upperFirst(_.camelCase(`${key}-view`))
        const component = Views[componentIdent]

        if (typeof component === 'undefined') {
            console.error(`View ${componentIdent} could not be found.`)
        } else {
            views.push({
                path: route.path,
                ViewComponent: component,
            })
        }
    })

    return (
        <Route
            render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        appear
                        classNames="has-transition"
                        key={location.key}
                        timeout={{ enter: 600, exit: 600 }}
                    >
                        <Switch location={location}>
                            {views.map(({ path, ViewComponent }, index) => (
                                <Route key={index} exact path={path} component={ViewComponent} />
                            ))}
                            <Route component={Views['NotFoundView']} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}
        />
    )
}

export default RouteResolver
