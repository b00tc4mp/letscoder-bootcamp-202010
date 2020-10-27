function Rectangle(color, width, height) {
    this.color = color
    this.width = width
    this.height = height
}

Rectangle.prototype.draw = function() {
    document.write(`<div style="background-color: ${this.color}; width: ${this.width}px; height: ${this.height}px;"></div>`)
}

Rectangle.prototype.toString = function() {
    return `Rectangle { color: ${this.color}, width: ${this.width}, height: ${this.height} }`    
}

var red = new Rectangle('red', 100, 100)
var blue = new Rectangle('blue', 100, 100)

red.toString = function() { return 'blah blah blah' }

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())


// 2

function Shape(color) {
    this.color = color
}

Shape.prototype.toString = function() {
    return `Shape { color: ${this.color} }`
}

function Rectangle(color, width, height) {
    Shape.call(this, color)    

    this.width = width
    this.height = height
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.draw = function() {
    document.write(`<div style="background-color: ${this.color}; width: ${this.width}px; height: ${this.height}px;"></div>`)
}

Rectangle.prototype.toString = function() {
    return `Rectangle { color: ${this.color}, width: ${this.width}, height: ${this.height} }`    
}

var red = new Rectangle('red', 100, 100)
var blue = new Rectangle('blue', 100, 100)

red.toString = function() { return 'blah blah blah' }

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.__proto__.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

// 3 (same but in es6)

class Shape {
    constructor(color) {
        this.color = color
    }

    toString() {
        return `Shape { color: ${this.color} }`
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)    

        this.width = width
        this.height = height
    }

    draw() {
        document.write(`<div style="background-color: ${this.color}; width: ${this.width}px; height: ${this.height}px;"></div>`)
    }

    toString() {
        return `Rectangle { color: ${this.color}, width: ${this.width}, height: ${this.height} }`    
    }
}

var red = new Rectangle('red', 100, 100)
var blue = new Rectangle('blue', 100, 100)

red.toString = function() { return 'blah blah blah' }

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())

delete red.__proto__.__proto__.toString

console.log('red', red.toString())
console.log('blue', blue.toString())



VM4074:33 red blah blah blah
VM4074:34 blue Rectangle { color: blue, width: 100, height: 100 }
VM4074:38 red Rectangle { color: red, width: 100, height: 100 }
VM4074:39 blue Rectangle { color: blue, width: 100, height: 100 }
VM4074:43 red Shape { color: red }
VM4074:44 blue Shape { color: blue }
VM4074:48 red [object Object]
VM4074:49 blue [object Object]
undefined