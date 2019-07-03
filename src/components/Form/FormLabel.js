import React from 'react'
import { Component } from '../Component'

class FormLabel extends Component {
    render() {
        const { text, name } = this.props;

        return (
            <label className={`form_label${this.state.classNames}`} htmlFor={name}>{text}</label>
        )
    }
}

export default FormLabel
