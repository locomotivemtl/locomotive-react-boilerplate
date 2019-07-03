import React from 'react'
import { Component } from '../Component'

class LayoutItem extends Component {
    render() {
        return (
            <div className={`layout_item${this.state.classNames}`}>
                {this.props.children}
            </div>
        )
    }
}

export default LayoutItem
