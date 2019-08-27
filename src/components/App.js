import React from 'react'

import './Style/index.scss'

import { ConnectedRouter } from 'connected-react-router'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import routes from '../config/routes.json'
import * as Views from '../views'

// This component allows us to define all routes through routes.json.
// Using this config format allows us to centralize slugs and their related view component.
const App = ({ history }) => {
    let views = []
    _.forOwn(routes, (route, key) => {
        const componentIdent = _.has(route, 'component') ? route.component : _.upperFirst(_.camelCase(`${key}-view`))
        const component = Views[componentIdent]

        if (typeof component === 'undefined') {
            console.error(`View ${componentIdent} could not be found.`)
        } else {
            views.push({
                component: component,
                slug: route.slug,
            })
        }
    })

    return (
        <ConnectedRouter history={history}>
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            timeout={{ enter: 600, exit: 600 }}
                            classNames="has-transition"
                            appear
                            key={location.key}
                        >
                            <Switch location={location}>
                                {views.map(({ component, slug }, index) => (
                                    <Route key={index} exact path={slug} component={component} />
                                ))}
                                <Route component={Views['NotFoundView']} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object.isRequired,
}

export default App
