import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_heading.scss'

const Heading = ({ children, el, ...classProps }) => {
    const El = el || 'p'
    return <El className={renderClasses('heading', classProps)}>{children}</El>
}

Heading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    el: PropTypes.string,
}

export default Heading
