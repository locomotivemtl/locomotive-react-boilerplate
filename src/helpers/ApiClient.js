import { setup } from 'axios-cache-adapter'
import _ from 'lodash'

const methodRequiresData = {
    get: false,
    delete: false,
    head: false,
    options: false,
    post: true,
    put: true,
    patch: true,
}

class ApiClient {

    constructor() {
        this.accessToken = null
        const baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/`
        this.client = setup(this.addTokenToConfig({
            baseURL: baseURL,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            json: true,
            cache: {
                debug: true,
                exclude: {
                    paths: [
                        `^${baseURL}users/self`
                    ]
                }
            }
        }))
        this.client.interceptors.response.use(
            response => { return response },
            error => {
                /** Makes sure our actions always receive errors in the same format. */
                if (typeof error.response === 'undefined') {
                    error.response = { data: [ { message: 'A network error occured.' } ] }
                }
                return Promise.reject(error)
            }
        )
    }

    clearCache(endpoint) {
        if (typeof endpoint === 'string') {
            const url = this.client.defaults.baseURL + endpoint
            this.client.cache.removeItem(url)
        } else {
            this.client.cache.clear()
        }
    }

    addTokenToConfig(config = {}) {
        if (typeof config.headers !== 'object') {
            config.headers = {}
        }
        config.headers['Authorization'] = `Bearer ${_.isEmpty(this.accessToken) ? '' : this.accessToken}`
        return config
    }

    request(options = {}) {
        const { method, endpoint, data, conf } = options

        if (methodRequiresData[method]) {
            return this.client[method](endpoint, data, this.addTokenToConfig(conf))
        } else {
            return this.client[method](endpoint, this.addTokenToConfig(conf))
        }
    }

    get(url, conf = {}) {
        return this.client.get(url, this.addTokenToConfig(conf))
    }

    delete(url, conf = {}) {
        return this.client.delete(url, this.addTokenToConfig(conf))
    }

    head(url, conf = {}) {
        return this.client.head(url, this.addTokenToConfig(conf))
    }

    options(url, conf = {}) {
        return this.client.options(url, this.addTokenToConfig(conf))
    }

    post(url, data = {}, conf = {}) {
        return this.client.post(url, data, this.addTokenToConfig(conf))
    }

    put(url, data = {}, conf = {}) {
        return this.client.put(url, data, this.addTokenToConfig(conf))
    }

    patch(url, data = {}, conf = {}) {
        return this.client.patch(url, data, this.addTokenToConfig(conf))
    }
}


export const apiClient = new ApiClient()
