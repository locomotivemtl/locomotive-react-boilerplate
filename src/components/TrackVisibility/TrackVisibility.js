import React, { Component } from 'react'

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
                root: null,
                rootMargin: '0px',
                threshold: 0.05,
            }
        )

        if(this.ref.current) {
            this.observer.observe(this.ref.current);
        }
    }

    componentWillUnmount() {
        if(this.ref.current) {
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

