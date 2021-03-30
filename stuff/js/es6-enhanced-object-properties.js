var mary = { 
    name: 'Mary', 
    toString: function() { return 'i am ' + this.name }
}

mary.toString()
"i am Mary"
var mary = { 
    name: 'Mary', 
    toString() { return `i am  ${this.name}` }
}

mary.toString()
"i am  Mary"