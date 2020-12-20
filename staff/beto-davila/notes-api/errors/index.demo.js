const { ValueError, ConflictError, AuthError } = require('./')

console.log(new ValueError('value 5 is incorrect'))
console.log(new ConflictError('user with id 232352 already exists'))
console.log(new AuthError('incorrect username or password'))