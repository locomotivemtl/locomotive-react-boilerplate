import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_heading.scss'

const Heading = ({ children, el, isShit, ...classProps }) => {
    const El = el || 'p'
    return <El className={renderClasses('heading', classProps)}>{children}</El>
}

Heading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    isShit: PropTypes.bool,
    el: PropTypes.string,
}

Heading.defaultProps = {
    isShit: false
}

export default Heading
