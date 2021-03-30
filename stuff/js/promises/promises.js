//new Promise((resolve, reject) => resolve(1)).then(console.log)
Promise.resolve(1).then(console.log)

// 2

//Promise
  //  .resolve(3)
  new Promise((resolve, reject) => {
    //resolve(3)
    //reject(4)
     throw new Error('forced error in constructor')
 })
 .then(value => {
     if (value !== 3) throw new Error('value is not 3')
     
     return value * 4
 })
 .then(result => {
     console.log(result)

     return result * 10
 })
 .then(result => {
     console.log(result)
 })
 .catch(error => console.log(`%c${error}`, 'background-color: orange;'))
 .then(() => 5)
 .then(value => value * 5)
 .then(result => console.log(result))

VM51895:21 Error: forced error in constructor


// 3

new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))
    .then(value => new Promise((resolve, reject) => setTimeout(() => resolve(value * 10), 2000)))
    .then(value => console.log(value))
Promise {<pending>}
VM52476:3 100

// 4

new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))
    .then(value => 
            new Promise((resolve, reject) => setTimeout(() => resolve(value * 10), 2000))
    )
    .then(value => 
        Promise.resolve(value)
            .then(value => value * 2)
            .then(value => new Promise((resolve, reject) => setTimeout(() => resolve(value * 5), 3000)))
    )
    .then(value => console.log(value))
Promise {<pending>}
VM53212:10 1000

// 5

console.log(new Date)

new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))
    .then(value => 
            new Promise((resolve, reject) => setTimeout(() => resolve(value * 10), 2000))
    )
    .then(value => 
        Promise.resolve(value)
            .then(value => {
                return value * 2
            })
            .then(value => {
                throw new Error(`forced error here with value ${value}`)
                //new Promise((resolve, reject) => setTimeout(() => resolve(value * 5), 3000))
            })
    )
    .then(value => console.log(new Date, value))
    .catch(error => console.error(new Date, error.message))
VM53907:1 Tue Nov 24 2020 13:30:41 GMT+0100 (Central European Standard Time)
Promise {<pending>}
VM53907:18 Tue Nov 24 2020 13:30:44 GMT+0100 (Central European Standard Time) "forced error here with value 200"
(anonymous) @ VM53907:18
Promise.catch (async)
(anonymous) @ VM53907:18

// 6

console.log(new Date)

new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))
    .then(value => 
            new Promise((resolve, reject) => setTimeout(() => resolve(value * 10), 2000))
    )
    .then(value => 
        Promise.resolve(value)
            .then(value => {
                return value * 2
            })
            .then(value => {
                return new Promise((resolve, reject) => setTimeout(() => resolve(value * 5), 3000))
            })
             .then(value => {
                return value * 6
            })
            .then(value => {
                return new Promise((resolve, reject) => setTimeout(() => resolve(value * 7), 4000))
            })
    )
    .then(value => console.log(new Date, value))
    .catch(error => console.error(new Date, error.message))
VM54179:1 Tue Nov 24 2020 13:34:23 GMT+0100 (Central European Standard Time)
Promise {<pending>}
VM54179:22 Tue Nov 24 2020 13:34:33 GMT+0100 (Central European Standard Time) 42000

// 7

console.log(new Date)

new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))
    .then(value => 
            new Promise((resolve, reject) => setTimeout(() => resolve(value * 10), 2000))
    )
    .then(value => 
        Promise.resolve(value)
            .then(value => {
                return value * 2
            })
            .then(value => {
                return new Promise((resolve, reject) => setTimeout(() => resolve(value * 5), 3000))
            })
             .then(value => {
                return value * 6
            })
            .then(value => {
                throw new Error(`forced error here with value ${value}`)
                //return new Promise((resolve, reject) => setTimeout(() => resolve(value * 7), 4000))
            })
    )
    .then(value => console.log(new Date, value))
    .catch(error => console.error(new Date, error.message))
VM54269:1 Tue Nov 24 2020 13:35:49 GMT+0100 (Central European Standard Time)
Promise {<pending>}
VM54269:24 Tue Nov 24 2020 13:35:55 GMT+0100 (Central European Standard Time) "forced error here with value 6000"
(anonymous) @ VM54269:24
Promise.catch (async)
(anonymous) @ VM54269:24