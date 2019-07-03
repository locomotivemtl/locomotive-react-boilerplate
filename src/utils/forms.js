import _ from 'lodash'

export function formatFormMessageItems(items) {
    if (_.isArray(items)) {
        return items
    } else {
        if (typeof items.message === 'string') {
            return [ items ]
        } else {
            return []
        }
    }
}
