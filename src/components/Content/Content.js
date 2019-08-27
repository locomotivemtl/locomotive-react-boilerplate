import React from 'react'
import { Component } from '../Component'

import './_content.scss'

class Content extends Component {
    render() {
        const { data } = this.props

        return <div className={`content${this.state.classNames}`} dangerouslySetInnerHTML={{ __html: data }}></div>
    }
}

export default Content
