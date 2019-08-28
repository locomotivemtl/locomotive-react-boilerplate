import React from 'react'

import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { View } from '../components/View'

export default () => (
    <View>
        <Container>
            <Heading el="h1" option={['delay1']} utility={['anim']}>
                Page not found
            </Heading>
        </Container>
    </View>
)
