const fs = require('fs').promises

const { argv: [, , from, to], memoryUsage } = process

console.log(memoryUsage())

fs.readFile(from)
    .then(content => {
        //console.log(content.toString())

        console.log(memoryUsage())

        return fs.writeFile(to, content)
    })
    .then(() => console.log('ended'))

// node cp hello-world.txt hello-world.3.txt