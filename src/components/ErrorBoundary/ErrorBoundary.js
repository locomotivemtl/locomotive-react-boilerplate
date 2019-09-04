import React from 'react'

import PropTypes from 'prop-types'

import { NotFoundView } from '../../views'

class ErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({ error, errorInfo })
        // You can also log error messages to an error reporting service here
    }

    render() {
        const { state } = this
        const { children } = this.props

        if (state.errorInfo) {
            // Error path
            return <NotFoundView />
        }
        // Normally, just render children
        return children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default ErrorBoundary

// <React.Fragment>
//     <h2>Something went wrong.</h2>
//     <details style={{ whiteSpace: 'pre-wrap' }}>
//         {state.error && state.error.toString()}
//         <br />
//         {state.errorInfo.componentStack}
//     </details>
// </React.Fragment>
