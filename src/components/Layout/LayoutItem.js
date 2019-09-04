import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

const LayoutItem = ({ children, ...classProps }) => (
    <div className={renderClasses('layout_item', classProps)}>{children}</div>
)

LayoutItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default LayoutItem
