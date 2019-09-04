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
        const baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/`
        this.axiosClient = setup({
            baseURL: baseURL,
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            json: true,
            cache: {
                // debug: true,
                exclude: {
                    paths: [`^${baseURL}users/self`],
                },
            },
        })
        this.axiosClient.interceptors.response.use(
            response => {
                return response
            },
            error => {
                /** Makes sure our actions always receive errors in the same format. */
                if (typeof error.response === 'undefined') {
                    error.response = {
                        data: [{ message: 'A network error occurred.' }],
                    }
                }
                return Promise.reject(error)
            }
        )
    }

    setStore(store) {
        this.store = store
    }

    clearCache(endpoint) {
        if (typeof endpoint === 'string') {
            const url = this.axiosClient.defaults.baseURL + endpoint
            this.axiosClient.cache.removeItem(url)
        } else {
            this.axiosClient.cache.clear()
        }
    }

    addTokenToConfig(config = {}) {
        if (typeof config.headers !== 'object') {
            config.headers = {}
        }
        const accessToken = (this.store.getState().auth.tokens || {}).accessToken
        config.headers['Authorization'] = `Bearer ${_.isEmpty(accessToken) ? '' : accessToken}`
        return config
    }

    request(options = {}) {
        const { method, endpoint, data, conf } = options

        if (methodRequiresData[method]) {
            return this.axiosClient[method](endpoint, data, this.addTokenToConfig(conf))
        } else {
            return this.axiosClient[method](endpoint, this.addTokenToConfig(conf))
        }
    }

    get(url, conf = {}) {
        return this.axiosClient.get(url, this.addTokenToConfig(conf))
    }

    delete(url, conf = {}) {
        return this.axiosClient.delete(url, this.addTokenToConfig(conf))
    }

    head(url, conf = {}) {
        return this.axiosClient.head(url, this.addTokenToConfig(conf))
    }

    options(url, conf = {}) {
        return this.axiosClient.options(url, this.addTokenToConfig(conf))
    }

    post(url, data = {}, conf = {}) {
        return this.axiosClient.post(url, data, this.addTokenToConfig(conf))
    }

    put(url, data = {}, conf = {}) {
        return this.axiosClient.put(url, data, this.addTokenToConfig(conf))
    }

    patch(url, data = {}, conf = {}) {
        return this.axiosClient.patch(url, data, this.addTokenToConfig(conf))
    }
}

export const apiClient = new ApiClient()
