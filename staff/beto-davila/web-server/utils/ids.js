// 'createId' is our util to generate random ids using Date and Math methods with math operations.
// padStart is used to pad the start of a string with a specific string ('0') to a certain length (18). 

module.exports = {
    createId() { return `${Date.now()}${`${Math.random() * 10 ** 18}`.padStart(18, '0')}` }
}