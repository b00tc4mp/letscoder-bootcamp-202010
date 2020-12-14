const { ContentError, LengthError, ValueError, FormatError, ConflictError, NotFoundError  } = require('.')

console.log(new ContentError('this error when value is empty or blank'))
console.log(new LengthError('this error when length is incorrect'))
console.log(new ValueError('this error when specific values are not correct(value, private)')),
console.log(new FormatError('this error with RegEx')) 
console.log(new ConflictError('this error when dataBase does not recieve a valid input')),
console.log(new NotFoundError('this error when dataBase does not found this input'))
