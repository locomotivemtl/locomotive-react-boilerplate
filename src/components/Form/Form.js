import React from 'react'

import PropTypes from 'prop-types'

import './_form.scss'

const Form = ({ children }) => <form className="form">{children}</form>

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default Form
