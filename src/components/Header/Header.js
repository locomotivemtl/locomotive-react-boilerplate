import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { renderNavItems } from '../../utils/nav'

import { Component } from '../Component'
import { Container } from '../Container'

import './_header.scss';

class Header extends Component {

    static propTypes = {
        navItems: PropTypes.array.isRequired,
    }

    render() {
        const { navItems } = this.props
        return (
            <header className={`header${this.state.classNames}`}>
                <Container>
                    <nav>
                        <ul>
                            {navItems.map((item, index) =>
                            <li>
                                <RouterLink to={item.url}>
                                    {item.label}
                                </RouterLink>
                            </li>)}
                        </ul>
                    </nav>
                </Container>
            </header>
        )
    }
}

const mapStateToProps = state => {
    const {
        router: { location: { pathname } }
    } = state

    return {
        navItems: renderNavItems(pathname)
    }
}

export default connect(mapStateToProps)(Header)
