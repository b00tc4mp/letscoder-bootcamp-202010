let chain = Promise.resolve()

module.exports = callback => chain.then(callback, callback) 