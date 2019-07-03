import React, { Component } from 'react'
import { View } from '../components/View'
import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { Layout, LayoutItem } from '../components/Layout'

class HomeView extends Component {

    render() {
        return (
            <View>
                <Container>
                    <Heading option="delay1" utility="anim" el="h1">Home view</Heading>

                    <Layout option="gutter">
                        <LayoutItem option="delay2" utility="1/2@from-small, anim">
                            Layout example
                        </LayoutItem>
                        <LayoutItem option="delay3" utility="1/2@from-small, anim">
                            Layout example
                        </LayoutItem>
                    </Layout>
                </Container>
            </View>
        )
    }
}


export default HomeView
