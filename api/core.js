const axios = require('axios')

const api_urls = {
    getXML: '/data/香港.xml',
}

export function getXML(name) {
    return axios({
        url: '/data/' + name + '.xml',
        method: 'get'
    })
}

export function getCSV(name) {
    return axios({
        url: '/data/' + name + '.csv',
        method: 'get'
    })
}