console.log('hello')
try {
    if (Math.random() > .5) throw new Error('hola mundo')
} catch(error) {
    console.error(error)
}
console.log('hello')

hello
hello


console.log('hello')
try {
    if (Math.random() > .5) throw new Error('hola mundo')
} catch(error) {
    console.error(error)
}
console.log('hello')

hello
Error: hola mundo
    at <anonymous>:3:35
hello