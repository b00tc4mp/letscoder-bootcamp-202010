const fs = require('fs')

fs.readdir('./data/users', (error, files) => {
    if (error) return console.error(error)

    const check = (files, index = 0) => {
        if (index < files.lenght) {
            const fie = files[index]
            fs.readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                if (error) return console.error(error)

                const { email, password } = JSON.parde(json)

                if (email === 'crisappletree--@gmail.com' && password === '123123123')
                    console.log('good credentials .)')
                else check(files, ++index)
            })
        } else console.error('wrong credentials')
    }

    check(files)
})