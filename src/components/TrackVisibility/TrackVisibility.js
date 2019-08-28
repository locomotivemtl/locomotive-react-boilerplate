import React from 'react'

import classNames from 'classnames'
import IntersectionObserver from 'intersection-observer-polyfill'
import PropTypes from 'prop-types'

class TrackVisibility extends React.Component {
    state = {
        isVisible: false,
        hasAppeared: false,
    }

    ref = React.createRef()

    componentDidMount() {
        const { onEnter, onLeave } = this.props
        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.05 && entry.intersectionRatio <= 1.05) {
                    this.setVisible(true)
                    onEnter()
                    this.setState({
                        hasAppeared: true,
                    })
                } else {
                    this.setVisible(false)
                    onLeave()
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.05,
            }
        )

        this.observer.observe(this.ref.current)
    }

    componentWillUnmount() {
        this.observer.unobserve(this.ref.current)
    }

    setVisible(flag) {
        this.props.onChange(flag)

        this.setState({
            isVisible: flag,
        })
    }

    render() {
        const { children, overrideClass } = this.props
        const { hasAppeared, isVisible } = this.state

        const classes = classNames(
            overrideClass,
            { 'is-show': hasAppeared },
            { 'is-visible': isVisible }
        )

        return (
            <div ref={this.ref} className={classes}>
                {children}
            </div>
        )
    }
}

TrackVisibility.propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
}

TrackVisibility.defaultProps = {
    onChange: () => {},
    onEnter: () => {},
    onLeave: () => {},
}

export default TrackVisibility
