import React from 'react'
import { Component } from '../Component'

import './_example.scss'

class Example extends Component {
    render() {
        return <div className={`example${this.state.classNames}`}></div>
    }
}

export default Example
