import React, { Component } from 'react'
import { View } from '../components/View'
import { Container } from '../components/Container'
import { Heading } from '../components/Heading'

class HomeView extends Component {

    render() {
        return (
            <View>
                <Container>
                    <Heading option="delay1" utility="anim" el="h1">Test view</Heading>
                </Container>
            </View>
        )
    }
}


export default HomeView
