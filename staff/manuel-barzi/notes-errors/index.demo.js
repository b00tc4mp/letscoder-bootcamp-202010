const { ValueError, ConflictError } = require('.')

console.log(new ValueError('value 5 is incorrect'))
console.log(new ConflictError('user with id 123 already exists'))
