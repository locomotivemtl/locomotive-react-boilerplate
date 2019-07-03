import React from 'react'
import { Component } from '../Component'

class FormInput extends Component {
    render() {
        const { name, type = 'text', text, placeholder, id } = this.props;

        let input;
        if (type === 'checkbox') {
            input = (
                <div>
                    <input className={`form_checkbox${this.state.classNames}`} type="checkbox" id={id} name={name} />
                    <label className="form_checkboxLabel" htmlFor={id}>{text}</label>
                </div>
            )
        }
        else if (type === 'textarea') {
            input = (
                <textarea className={`form_textarea${this.state.classNames}`} placeholder={placeholder} id={id} name={name} />
            )
        } else {
            input = (
                <input className={`form_input${this.state.classNames}`} type={type} placeholder={placeholder} id={id} name={name} />
            )
        }

        return input;
    }
}

export default FormInput
