import React, { Component } from 'react'
import PropTypes from 'prop-types'

// React component
export default class Example extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="example">
                <h1>
                    Example
                </h1>
            </div>
        )
    }
}

// Function component
const Example = ({ name }) =>

    <div className="example">
        <h1>
            Example
        </h1>
    </div>

export default Example

