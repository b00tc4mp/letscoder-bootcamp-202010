const { XMLHttpRequest } = require("xmlhttprequest")
const { call } = require('notes-utils')

global.XMLHttpRequest = XMLHttpRequest

module.exports = call