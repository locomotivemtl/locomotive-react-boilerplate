import React from 'react'

import PropTypes from 'prop-types'

import { Header } from '../Header'
import { ScrollToTop } from '../ScrollToTop'
import { Spinner } from '../Spinner'
import { TrackVisibility } from '../TrackVisibility'

import './_view.scss'

const View = ({ children, layoutClass }) => (
    <div className={`view ${layoutClass}`}>
        <Header />
        <main>
            <TrackVisibility>{children}</TrackVisibility>
        </main>
        <ScrollToTop />
        <Spinner />
    </div>
)

View.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    layoutClass: PropTypes.string,
}

View.defaultProps = {
    layoutClass: '',
}

export default View
