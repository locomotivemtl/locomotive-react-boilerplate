import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { renderClasses } from '../../utils/dom'
import { renderNavItems } from '../../utils/nav'

import { Wrapper } from '../Wrapper'

import './_header.scss'

const Header = ({ navItems, ...classProps }) => {
    const classes = renderClasses('header', classProps)
    return (
        <header className={classes}>
            <Wrapper>
                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <RouterLink to={item.url}>{item.label}</RouterLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Wrapper>
        </header>
    )
}

Header.propTypes = {
    navItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    navItems: renderNavItems(state.router.location.pathname),
})

export default connect(mapStateToProps)(Header)
