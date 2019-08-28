import React from 'react'

import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { Layout, LayoutItem } from '../components/Layout'
import { View } from '../components/View'

const HomeView = () => (
    <View>
        <Container>
            <Heading el="h1" option={['delay1']} utility={['anim']}>
                Home view
            </Heading>

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

export default HomeView
