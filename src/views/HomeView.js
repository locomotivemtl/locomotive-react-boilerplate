import React from 'react'

import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { Layout, LayoutItem } from '../components/Layout'
import { View } from '../components/View'

export default () =>

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
