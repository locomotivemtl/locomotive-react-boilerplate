import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Header } from "../Header";
import { Spinner } from "../Spinner";
import { TrackVisibility } from '../TrackVisibility'
import { ScrollToTop } from '../ScrollToTop'

import './_view.scss';

class Main extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string,
        ]).isRequired,
        layoutClass: PropTypes.string,
    }

    render() {
        const { children, layoutClass } = this.props;

        return (
            <div className={`view ${layoutClass}`}>
                <Header />
                <main>
                    <TrackVisibility>
                    {children}
                    </TrackVisibility>
                </main>
                <ScrollToTop />
                <Spinner />
            </div>
        )
    }
}

Main.defaultProps = {
    layoutClass: '',
}

export default Main
