module.exports = (req, res, next) => {
    const { method } = req

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')

    if (method === 'OPTIONS') return res.status(204).send()

    next()
}