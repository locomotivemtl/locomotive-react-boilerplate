import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { renderRoute } from '../../utils/routes'

import { ScrollToTop } from '../ScrollToTop'

class Main extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string,
        ]).isRequired,
        layoutClass: PropTypes.string,
    }

    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }

    render() {

        const { children, layoutClass } = this.props;

        return (

            <section className={`main ${layoutClass}`}>
                <ul>
                    <li>
                        <RouterLink to={renderRoute('home')}>
                            Home
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to={renderRoute('test')}>
                            Other page
                        </RouterLink>
                    </li>
                </ul>
                {children}
                <ScrollToTop />
            </section>
        )
    }
}

Main.defaultProps = {
    layoutClass: '',
}

export default Main
