import '../styles/main.scss';

import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import _ from 'lodash'
import {
    userIsAuthenticatedAndCanViewRoute,
    userIsAuthenticatedRedir,
    userIsNotAuthenticatedRedir
} from '../helpers/auth'
import * as Views from '../views'
import routes from '../config/routes.json'
import { TransitionGroup, CSSTransition } from "react-transition-group";

// This component allows us to define all routes through routes.json.
// Using this config format allows us to centralize slugs and their related view component.
const App = ({ history }) => {
    let views = []
    _.forOwn(routes, (route, key) => {
        const componentIdent = _.has(route, 'component') ? route.component : _.upperFirst(_.camelCase(`${key}-view`))
        let component = null
        if (route.isAuthenticated) {
            if (typeof route.authRule === 'string') {
                component = userIsAuthenticatedAndCanViewRoute(route.authRule)(Views[componentIdent])
            } else {
                component = userIsAuthenticatedRedir(Views[componentIdent])
            }
        } else if (route.isNotAuthenticated) {
            component = userIsNotAuthenticatedRedir(Views[componentIdent])
        } else {
            component = Views[componentIdent]
        }

        views.push({
            id: key,
            slug: route.slug,
            component: component,
        })
    })

    return (
        <ConnectedRouter history={history}>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        timeout={{enter: 600, exit: 600}}
                        classNames='o-transition'
                        appear
                        key={location.key}
                    >
                        <Switch location={location}>
                            {views.map(({ slug, component }, index) => (
                            <Route key={index} exact path={slug} component={component} />
                            ))}
                            <Route component={Views['NotFoundView']} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

            )} />

        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object.isRequired,
}

export default App;
