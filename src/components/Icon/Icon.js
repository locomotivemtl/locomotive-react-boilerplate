import React from 'react'
import { Component } from '../Component'

import './_icon.scss'

class Icon extends Component {
    render() {
        const { name, type, title } = this.props

        const path =
            typeof type !== 'undefined'
                ? `/assets/images/${type}/sprite.svg`
                : `/assets/images/sprite.svg`

        return (
            <div className={`icon -${name}${this.state.classNames}`}>
                <svg role="img">
                    {title && <title>{title}</title>}
                    <use xlinkHref={`${path}#${name}`} />
                </svg>
            </div>
        )
    }
}

export default Icon
