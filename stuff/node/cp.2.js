const fs = require('fs')

const { argv: [, , from, to], memoryUsage } = process

console.log(memoryUsage())

const rs = fs.createReadStream(from)
const ws = fs.createWriteStream(to)

rs.on('data', chunk => ws.write(chunk))

rs.on('end', () => {
    console.log(memoryUsage())
    
    console.log('ended')
})