function splice(array, start, deleteCount, item) {
    if (deleteCount === 0) {
        for (var i = array.length; i > start; i--)
            array[i] = array[i - 1]

        array[start] = item

        return []
    } else {
        var extracted = []

        for (var i = start; i < start + deleteCount; i++)
            extracted.push(array[i])

        array[start] = item

        for (var i = start + deleteCount; i < array.length; i++)
            array[i - 1] = array[i]

        array.length = array.length - (deleteCount - 1)

        return extracted
    }
}

var months = ['Jan', 'March', 'April', 'June']
//months.splice(1, 0, 'Feb')
//splice(months, 1, 0, 'Feb')

var months = ["Jan", "Feb", "March", "April", "June"]
//months.splice(4, 1, 'May')
splice(months, 4, 1, 'May')
//months.splice(1, 2, 'Hello')
//splice(months, 1, 2, 'Hello')

// 2

function splice(array, start, deleteCount, item) {
    var extracted = []

    if (deleteCount === 0) {
        for (var i = array.length; i > start; i--)
            array[i] = array[i - 1]

        array[start] = item

        return extracted
    } else {
        for (var i = start; i < start + deleteCount; i++)
            extracted.push(array[i])

        array[start] = item

        for (var i = start + deleteCount; i < array.length; i++)
            array[i - 1] = array[i]

        array.length = array.length - (deleteCount - 1)

        return extracted
    }
}

var months = ['Jan', 'March', 'April', 'June']
//months.splice(1, 0, 'Feb')
//splice(months, 1, 0, 'Feb')

var months = ["Jan", "Feb", "March", "April", "June"]
//months.splice(4, 1, 'May')
splice(months, 4, 1, 'May')
//months.splice(1, 2, 'Hello')
//splice(months, 1, 2, 'Hello')

// 3

function splice() {
    var array = arguments[0], start = arguments[1], deleteCount = arguments[2]

    var extracted = []

    if (deleteCount === 0) {
        for (var i = array.length; i > start; i--)
            array[i] = array[i - 1]

        array[start] = arguments[3]

        return extracted
    } else {
        for (var i = start; i < start + deleteCount; i++)
            extracted.push(array[i])

        var itemsLength = arguments.length - 3

        debugger
        // TODO add if-else to check whether deleteCount < itemsLength (in this case the following for loop does not apply) [1]
        for (var i = start + deleteCount; i < array.length; i++)
            array[i - (deleteCount - itemsLength)] = array[i]

        for (var i = start; i < start + itemsLength; i++)
            array[i] = arguments[i - start + 3]

        array.length = array.length - (deleteCount - itemsLength)

        return extracted
    }
}

var months = ['Jan', 'March', 'April', 'June']
//months.splice(1, 0, 'Feb')
//splice(months, 1, 0, 'Feb')

var months = ["Jan", "Feb", "March", "April", "June"]
//months.splice(4, 1, 'May')
//splice(months, 4, 1, 'May')
//months.splice(1, 2, 'Hello')
//splice(months, 1, 2, 'Hello')
//months.splice(1, 3, 'A', 'B', 'C')
//splice(months, 1, 3, 'A', 'B', 'C')
//months.splice(1, 4, 'A', 'B', 'C')
//splice(months, 1, 4, 'A', 'B', 'C')
var cosas = [true, 'a', 1, {}, [], function () { }, 2, 3, 4, 5, 6, 7, 8, 9]
//cosas.splice(1, 5, 'A', 'B', 'C', 'D')
//splice(cosas, 1, 5, 'A', 'B', 'C', 'D')
//cosas.splice(1, 6, 'A', 'B', 'C', 'D')
//splice(cosas, 1, 6, 'A', 'B', 'C', 'D')
//cosas.splice(1, 2, 'A', 'B', 'C', 'D')
splice(cosas, 1, 2, 'A', 'B', 'C', 'D') // WARN!!! this case is not yet supported TODO let's support it ,) [1]

// 4

function splice() {
    var array = arguments[0], start = arguments[1], deleteCount = arguments[2]

    var extracted = []

    if (deleteCount === 0) {
        for (var i = array.length; i > start; i--)
            array[i] = array[i - 1]

        array[start] = arguments[3]

        return extracted
    } else {
        for (var i = start; i < start + deleteCount; i++)
            extracted.push(array[i])

        var itemsLength = arguments.length - 3

        //debugger
        if (deleteCount >= itemsLength)
            for (var i = start + deleteCount; i < array.length; i++)
                array[i - (deleteCount - itemsLength)] = array[i]
        else {
            // TODO from last element move all items the positions indicated by ... [1]
        }

        for (var i = start; i < start + itemsLength; i++)
            array[i] = arguments[i - start + 3]

        array.length = array.length - (deleteCount - itemsLength)

        return extracted
    }
}

var months = ['Jan', 'March', 'April', 'June']
//months.splice(1, 0, 'Feb')
//splice(months, 1, 0, 'Feb')

var months = ["Jan", "Feb", "March", "April", "June"]
//months.splice(4, 1, 'May')
//splice(months, 4, 1, 'May')
//months.splice(1, 2, 'Hello')
//splice(months, 1, 2, 'Hello')
//months.splice(1, 3, 'A', 'B', 'C')
//splice(months, 1, 3, 'A', 'B', 'C')
//months.splice(1, 4, 'A', 'B', 'C')
//splice(months, 1, 4, 'A', 'B', 'C')
var cosas = [true, 'a', 1, {}, [], function () { }, 2, 3, 4, 5, 6, 7, 8, 9]
//cosas.splice(1, 5, 'A', 'B', 'C', 'D')
//splice(cosas, 1, 5, 'A', 'B', 'C', 'D')
//cosas.splice(1, 6, 'A', 'B', 'C', 'D')
//splice(cosas, 1, 6, 'A', 'B', 'C', 'D')
//cosas.splice(1, 2, 'A', 'B', 'C', 'D')
splice(cosas, 1, 2, 'A', 'B', 'C', 'D') // WARN!!! this case is not yet supported TODO let's support it ,) [1]
//cosas.splice(1, 4, 'A', 'B', 'C', 'D')
//splice(cosas, 1, 4, 'A', 'B', 'C', 'D')

(2) ["a", 1]
cosas
(16) [true, "A", "B", "C", "D", ƒ, 2, 3, 4, 5, 6, 7, 8, 9, empty × 2] // (·)(·)