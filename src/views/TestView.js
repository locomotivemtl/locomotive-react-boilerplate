import React from 'react'

import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { View } from '../components/View'

const TestView = () => (
    <View>
        <Container>
            <Heading el="h1" option={['delay1']} utility={['anim']}>
                Test view
            </Heading>
        </Container>
    </View>
)

export default TestView
