import React, { Component } from 'react'
import IntersectionObserver from 'intersection-observer-polyfill';

// React component
class TrackVisibility extends Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.intersectionRatio >= 0.05) {
                    this.setVisible();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.05,
            }
        )

        if(typeof this.ref.current === 'object') {
            setTimeout(() => {
                this.observer.observe(this.ref.current);
            },600)
        }
    }

    componentWillUnmount() {
        if(typeof this.ref.current === 'object') {
            this.observer.unobserve(this.ref.current);
        }
    }

    setVisible() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const { children, overrideClass } = this.props;
        const { isVisible } = this.state;

        return (
            <div ref={this.ref} className={(isVisible) ? `${overrideClass} is-show` : `${overrideClass}`}>
                {children}
            </div>
        )
    }
}

export default TrackVisibility

