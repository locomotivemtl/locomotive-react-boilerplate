import React from 'react'
import { NavLink } from 'react-router-dom'
import { Component } from '../Component'
import { Container } from '../Container'
import { renderRoute } from '../../utils/routes'

import './_header.scss';

class Header extends Component {
    render() {
        return (
            <header className={`header${this.state.classNames}`}>
                <Container>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={renderRoute('home')} exact>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={renderRoute('test')}>
                                    Other page
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        )
    }
}

export default Header
