const { XMLHttpRequest } = require("xmlhttprequest")
const { call } = require('geogin-utils')

global.XMLHttpRequest = XMLHttpRequest

module.exports = call