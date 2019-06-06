import React, { Component } from 'react'
import { Main } from '../components/Main'
import { Layout } from '../components/Layout'
import { LayoutItem } from '../components/Layout'
import { Spinner } from "../components/Spinner";
import { TrackVisibility } from '../components/TrackVisibility'

class HomeView extends Component {

    render() {

        return (
            <Main>
                <div className="u-padding">
                    <TrackVisibility>
                        <h1 className="u-anim-scroll -parent -delay-1">Home view</h1>

                        <Layout overrideClass="-gutter-small">
                            <LayoutItem overrideClass="u-1/2@from-small u-anim-scroll -parent -delay-2">
                                Layout example
                            </LayoutItem>
                            <LayoutItem overrideClass="u-1/2@from-small u-anim-scroll -parent -delay-3">
                                Layout example
                            </LayoutItem>
                        </Layout>
                    </TrackVisibility>
                </div>

                <Spinner />
            </Main>
        )
    }
}


export default HomeView
