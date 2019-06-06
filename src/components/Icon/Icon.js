import React, { Component } from 'react'

export default class Icon extends Component {
    render() {
        const { name, type, overrideClass } = this.props

        const path = (typeof type !== 'undefined') ?
            `/assets/images/${type}/sprite.svg` :
            `/assets/images/sprite.svg`

        return (
            <div className={`icon -${name} ${overrideClass}`}>
                <svg role="img">
                    <use xlinkHref={`${path}#${name}`} />
                </svg>
            </div>
        )
    }
}
