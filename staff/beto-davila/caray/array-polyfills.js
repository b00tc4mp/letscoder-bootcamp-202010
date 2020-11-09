
// Return a random index (number) 
if (typeof Array.prototype.randomIndex === 'undefined')
    Array.prototype.randomIndex = function () {
        return Math.floor(Math.random() * this.length)
    }

// Return a element from a given array randomly
if (typeof Array.prototype.random === 'undefined')
    Array.prototype.random = function () {
        return this[this.randomIndex()]
    }

// Make a random order of the elements of a given array
if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function () {
        for (var i = 0; i < this.length; i++) {
            var current = this[i]

            var index = this.randomIndex()  

            this[i] = this[index]

            this[index] = current
        }
    }
