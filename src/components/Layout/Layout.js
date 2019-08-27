import React from 'react'
import { Component } from '../Component'

import './_layout.scss'

class Layout extends Component {
    render() {
        return <div className={`layout${this.state.classNames}`}>{this.props.children}</div>
    }
}

export default Layout
