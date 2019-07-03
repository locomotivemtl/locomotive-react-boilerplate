import React from 'react'
import { Component } from '../Component'

import './_container.scss';

class Container extends Component {
    render() {
        return (
            <div className={`container${this.state.classNames}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Container

