import React from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { Layout, LayoutItem } from '../components/Layout'
import { View } from '../components/View'

class HomeView extends React.Component {
    handleButtonClick = event => {
        console.log('Clicked the button')
    }

    render() {
        return (
            <View>
                <Container>
                    <Heading el="h1" option={['delay1']} utility={['anim']}>
                        Home view
                    </Heading>
                    <Layout option={['gutter']}>
                        <LayoutItem option={['delay2']} utility={['1/2@from-small', 'anim']}>
                            <Button className="homeview-button" onClick={this.handleButtonClick}>
                                Click Me
                            </Button>
                        </LayoutItem>
                        <LayoutItem option={['delay3']} utility={['1/2@from-small', 'anim']}>
                            Layout example
                        </LayoutItem>
                    </Layout>
                </Container>
            </View>
        )
    }
}

export default HomeView
