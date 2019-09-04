import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

const FormLabel = ({ children, inputId, ...classProps }) => {
    const classes = renderClasses('form_label', classProps)

    return (
        <label className={classes} htmlFor={inputId}>
            {children}
        </label>
    )
}

FormLabel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    inputId: PropTypes.string,
}

FormLabel.defaultProps = {
    inputId: null,
}

export default FormLabel
