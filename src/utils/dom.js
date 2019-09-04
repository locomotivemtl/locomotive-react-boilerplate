import classNames from 'classnames'

export const renderClasses = (baseClass = '', props = {}) => {
    const { className: extraClasses } = props
    props = {
        option: [],
        utility: [],
        status: [],
        ...props,
    }

    return classNames(
        baseClass,
        props.option.map(option => `-${option}`),
        props.utility.map(utility => `u-${utility}`),
        props.status.map(status => `is-${status}`),
        extraClasses
    )
}
