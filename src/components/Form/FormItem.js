import React from 'react'
import { Component } from '../Component'

class FormLabel extends Component {
    render() {
        return <div className={`form_item${this.state.classNames}`}>{this.props.children}</div>
    }
}

export default FormLabel
