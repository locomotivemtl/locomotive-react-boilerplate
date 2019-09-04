import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_layout.scss'

const Layout = ({ children, ...classProps }) => (
    <div className={renderClasses('layout', classProps)}>{children}</div>
)

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default Layout
