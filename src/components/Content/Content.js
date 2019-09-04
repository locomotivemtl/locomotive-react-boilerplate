import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_content.scss'

const Content = ({ children, ...classProps }) => (
    <div className={renderClasses('content', classProps)}>{children}</div>
)

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default Content
