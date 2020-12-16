const { models: { Menu, User } } = require('malbec-data')


module.exports = (userId, _menu) => {

    return User.findById(userId).lean()
        .then(user => {
            if (user) {
                debugger
                const { entrantes, principales, bebidas, postres } = _menu

                return Menu.findOne()
                    .then(menu => {
                        if (menu) {
                            menu.date = Date.now()

                            menu.entrantes = entrantes

                            menu.principales = principales

                            menu.bebidas = bebidas

                            menu.postres = postres

                            return menu.save()
                        }

                        return Menu.create(_menu)
                    })
                    .then((menu) => id = menu._id.toString())
            }
        })
}
