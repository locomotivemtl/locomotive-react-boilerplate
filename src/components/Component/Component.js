import { Component as ReactComponent } from 'react'

class Component extends ReactComponent {
    constructor(props) {
        super(props);

        this.state = {
            classProps: {},
            classNames: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.option !== state.classProps.option || props.utility !== state.classProps.utility || props.state !== state.classProps.state) {
            const option = props.option ? ' ' + props.option.split(',').map(i => '-' + i.trim()).join(' ') : '';
            const utility = props.utility ? ' ' + props.utility.split(',').map(i => 'u-' + i.trim()).join(' ') : '';
            const state = props.state ? ' ' +  props.state.split(',').map(i => 'is-' + i.trim()).join(' ') : '';
            const className = option + utility + state;

            return {
                classProps: {
                    option: props.option,
                    utility: props.utility,
                    state: props.state
                },
                classNames: className
            }
        } else {
            return null;
        }
    }
}

export default Component


