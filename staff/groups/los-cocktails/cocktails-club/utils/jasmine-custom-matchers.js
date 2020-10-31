beforeEach(function(){
    jasmine.addMatchers({
        toBeOfType: function(){
            return {
                compare: function(actual,expected) {
                    const result = typeof actual
                    
                    return {
                        pass: result === expected,
                        message: `Expected ${actual} to be of type ${expected}, but got ${result}`
                    }
                }
            }
        }
    })
})