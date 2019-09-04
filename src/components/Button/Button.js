import React from 'react'

import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import { renderClasses } from '../../utils/dom'
import { renderRoute } from '../../utils/routes'

import { Icon } from '../Icon'

import './_button.scss'

const Button = ({ children, icon, isExternalLink, href, onClick, route, ...classProps }) => {
    const classes = renderClasses('button', classProps)
    const iconEl =
        icon !== null ? (
            <span className="button_icon">
                <Icon name={icon} />
            </span>
        ) : null

    return route !== null ? (
        <RouterLink className={classes} to={renderRoute(route)}>
            {iconEl}
            {children}
        </RouterLink>
    ) : href !== null ? (
        <a href={href} className={classes} target={isExternalLink ? '_blank' : null}>
            {iconEl}
            {children}
        </a>
    ) : (
        <button type="button" className={classes} onClick={onClick}>
            {iconEl}
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    isExternalLink: PropTypes.bool,
    onClick: PropTypes.func,
    route: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

Button.defaultProps = {
    href: null,
    icon: null,
    isExternalLink: false,
    onClick: () => {},
    route: null,
}

export default Button
