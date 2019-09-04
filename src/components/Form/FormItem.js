import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

const FormItem = ({ children, ...classProps }) => {
    const classes = renderClasses('form_item', classProps)

    return <div className={classes}>{children}</div>
}

FormItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default FormItem
