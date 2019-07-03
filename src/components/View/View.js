import React from 'react'

import PropTypes from 'prop-types'
import { Header } from "../Header";
import { Spinner } from "../Spinner";
import { TrackVisibility } from '../TrackVisibility'
import { ScrollToTop } from '../ScrollToTop'

import './_view.scss';

const Main = ({ children, layoutClass }) =>

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

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    layoutClass: PropTypes.string,
}

Main.defaultProps = {
    layoutClass: '',
}

export default Main
