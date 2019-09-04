import React from 'react'

import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'

import { ErrorBoundary } from '../ErrorBoundary'
import { RouteResolver } from '../RouteResolver'

import '../Style/index.scss'

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <ErrorBoundary>
            <RouteResolver />
        </ErrorBoundary>
    </ConnectedRouter>
)

App.propTypes = {
    history: PropTypes.object.isRequired,
}

export default App
