import React from 'react'
import { Component } from '../Component'

import './_heading.scss'

class Heading extends Component {
    render() {
        const El = this.props.el || 'p'

        return <El className={`heading${this.state.classNames}`}>{this.props.children}</El>
    }
}

export default Heading
