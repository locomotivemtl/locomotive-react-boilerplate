import React, { Component } from 'react'
import { Main } from '../components/Main'
import { Spinner } from "../components/Spinner";
import { TrackVisibility } from '../components/TrackVisibility'

class HomeView extends Component {

    render() {

        return (
            <Main>
                <div className="u-padding">
                    <TrackVisibility overrideClass="u-anim-scroll -delay-1">
                        <h1>Test view</h1>

                    </TrackVisibility>
                </div>
                <Spinner />
            </Main>
        )
    }
}


export default HomeView
