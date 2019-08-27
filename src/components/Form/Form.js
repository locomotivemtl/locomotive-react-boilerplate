import React from 'react'
import { Component } from '../Component'
import './_form.scss'

class Form extends Component {
    render() {
        return <form className={`form${this.state.classNames}`}>{this.props.children}</form>
    }
}

export default Form
