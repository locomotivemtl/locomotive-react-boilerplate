import React from 'react'

import PropTypes from 'prop-types'

import './_wrapper.scss'

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
}

export default Wrapper
