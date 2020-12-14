const {
  ContentError,
  LengthError,
  ValueError,
  FormatError
} = require('geogin-errors')

module.exports = {
  validateEmail (email) {
    if (typeof email !== 'string')
      throw new TypeError(`${email} is not an e-mail`)

    if (!email.trim().length) throw new ContentError('e-mail is empty or blank')

    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
      throw new FormatError('invalid e-mail')
  },

  validatePassword (password) {
    if (typeof password !== 'string')
      throw new TypeError(password + ' is not a password')

    if (!password.trim().length)
      throw new ContentError('password is empty or blank')
  },

  validateCallback (callback) {
    if (typeof callback !== 'function')
      throw new TypeError(callback + ' is not a callback')
  },

  validateFullname (fullname) {
    if (typeof fullname !== 'string')
      throw new TypeError(fullname + ' is not a fullname')

    if (!fullname.trim().length)
      throw new ContentError('fullname is empty or blank')
  },

  validateId (id) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

    if (!id.trim().length) throw new ContentError('id is empty or blank')

    if (id.length !== 24)
      throw new LengthError(`id length ${id.length} is not 24`)

    if (!id.match(/^[0-9a-fA-F]{24}$/))
      throw new TypeError(id + ' is not a valid id')
  },

  validateText (text) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a text')

    if (!text.trim().length) throw new ContentError('text is empty or blank')
  },

  validateTags (tags) {
    if (!(tags instanceof Array)) throw new TypeError(`${tags} is not an array`)

    tags.forEach(tag => {
      if (typeof tag !== 'string') throw new TypeError(tag + ' is not a tag')

      if (!tag.trim().length) throw new ContentError('tag is empty or blank')
    })
  },
  validateModePrivate (modePrivate) {
    !(
    modePrivate === true ||
    modePrivate === false ||
    toString.call(modePrivate) === '[object Boolean]'
  )
  },

  validateQuery (query) {
    if (typeof query !== 'string')
      throw new TypeError(query + ' is not a query')

    if (!query.trim().length) throw new ContentError('query is empty or blank')
  },

  validateTitle (title) {
    if (typeof title !== 'string')
      throw new TypeError(title + ' is not a title')

    if (!title.trim().length) throw new ContentError('title is empty or blank')
  },

  validateCoverImg (coverImg) {
    if (typeof coverImg !== 'string')
      throw new TypeError(title + ' is not a title')
  },

  validateHomeLocation (homeLocation) {
    if (!(homeLocation instanceof Object))
      throw new TypeError(`${homeLocation} is not a homeLocation`)
  },

  validateEndLocation (endLocation) {
    if (!(endLocation instanceof Object))
      throw new TypeError(`${endLocation} is not a endLocation`)
  },

  validateTime (time) {
    if (typeof time !== 'string') throw new TypeError(`${time} is not a time`)
  },

  validateKidsOk (kids_ok) {
    if (
      !(
        kids_ok === true ||
        kids_ok === false ||
        toString.call(kids_ok) === '[object Boolean]'
      )
    )
      throw new TypeError(kids_ok + ' is not a kids_ok')
  },

  validateEvaluations (evaluations) {
    if (!(evaluations instanceof Array))
      throw new TypeError(`${evaluations} is not a evaluations`)
  },

  validateTest (tests) {
    if (!(tests instanceof Array))
      throw new TypeError(`${tests} is not a tests`)
  },

  validateDescription (description) {
    if (typeof description !== 'string')
      throw new TypeError(description + ' is not a description')
  },

  validateOwner (owner) {
    if (!(owner instanceof Object))
      throw new TypeError(`${owner} is not a owner`)
  },
  validateImage (image) {
    if (typeof image !== 'string')
      throw new TypeError(image + ' is not a image')
  },
  validateScore (score) {
    if (typeof score !== 'Number')
      throw new TypeError(score + ' is not a score')
  },
  validateFavorites (favorites) {
    if (!(favorites instanceof Array))
      throw new TypeError(`${favorites} is not a favorites`)
  },
  validateData (data) {
    if (!(data instanceof Object)) throw new TypeError(`${data} is not a data`)
  },
  validateQrCode (qrCode) {
    if (typeof qrCode !== 'string')
      throw new TypeError(qrCode + ' is not a qrCode')
    if (!qrCode.match(/^(https:|http:)\S*/))
      throw new TypeError(`${qrCode} is not a valid qrCode miising: http/s`)
    if (!qrCode.includes('id_game'))
      throw new TypeError(`${qrCode} is not a valid Qrcode missing: id_game`)
  },
  validateTeams (teams) {
    if (!(teams instanceof Array))
      throw new TypeError(`${teams} is not an teams`)
  },
  validatePlayers (players) {
    if (!(players instanceof Array))
      throw new TypeError(`${players} is not an players`)
  },
  validateProgress (progress) {
    if (!(progress instanceof Object))
      throw new TypeError(`${progress} is not a progress`)
  },
  validateOrganizer (organizer) {
    if (!(organizer instanceof Object))
      throw new TypeError(`${organizer} is not a organizer`)
  }
}
