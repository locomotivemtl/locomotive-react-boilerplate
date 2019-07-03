import React from 'react'
import { Component } from '../Component'
import { Icon } from '../Icon'
import { Link } from 'react-router-dom'

import './_button.scss';

class Button extends Component {

    static defaultProps = {
        href: '/'
    }

    render() {
        const { el, href, type, onClick, icon } = this.props;
        const El = el || Link;

        return (
            <El className={`button${this.state.classNames}`} to={href} type={type} onClick={onClick}>
                {icon &&
                <span className="button_icon">
                    <Icon name={icon} />
                </span>
                }
                {this.props.children}
            </El>
        )
    }
}

export default Button
