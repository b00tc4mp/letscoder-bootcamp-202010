const fs = require('fs')

fs.readdir('./data/users', (error, files) => {
    if (error) return console.error(error)

    //console.log(files)

    /*
    files.forEach(file => fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
        if (error) return console.error(error)

        const { email, password } = JSON.parse(json)

        if (email === 'manuelbarzi@gmail.com' && password === '123123123')
            console.log('good credentials .)')
        else console.error('wrong credentials')
    }))
    */

    const check = (files, index = 0) => {
        if (index < files.length) {
            const file = files[index]

            fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                if (error) return console.error(error)

                const { email, password } = JSON.parse(json)

                if (email === 'manuelbarzi--@gmail.com' && password === '123123123')
                    console.log('good credentials .)')
                else check(files, ++index)
            })
        } else console.error('wrong credentials')
    }

    check(files)
})