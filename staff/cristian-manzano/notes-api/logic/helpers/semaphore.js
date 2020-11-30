let chain = Promise.resolve()

module.exports = callback => chain = chain.then(callback, callback)