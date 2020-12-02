module.exports = {
    createId() { return `${Date.now()}${`${Math.random() * 10 ** 18}`.padStart(18, '0')}` }
}