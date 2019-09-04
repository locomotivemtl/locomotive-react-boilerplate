import React from 'react'

import { Heading } from '../components/Heading'
import { View } from '../components/View'
import { Wrapper } from '../components/Wrapper'

const NotFoundView = () => (
    <View>
        <Wrapper>
            <Heading el="h1" option={['delay1']} utility={['anim']}>
                Page not found
            </Heading>
        </Wrapper>
    </View>
)

export default NotFoundView
