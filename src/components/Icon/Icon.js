import React from 'react'

import PropTypes from 'prop-types'

import { renderClasses } from '../../utils/dom'

import './_icon.scss'

const Icon = ({ name, title, type, ...classProps }) => {
    const path = type !== null ? `/assets/images/${type}/sprite.svg` : '/assets/images/sprite.svg'

    return (
        <div className={renderClasses(`icon -${name}`, classProps)}>
            <svg role="img">
                {title && <title>{title}</title>}
                <use xlinkHref={`${path}#${name}`} />
            </svg>
        </div>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
}

Icon.defaultProps = {
    title: null,
    type: null,
}

export default Icon
