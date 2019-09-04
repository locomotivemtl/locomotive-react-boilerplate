import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_example.scss'

const Example = ({ children, ...classProps }) => {
    const classes = renderClasses('example', classProps)

    return <div className={classes}>{children}</div>
}

Example.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default Example
