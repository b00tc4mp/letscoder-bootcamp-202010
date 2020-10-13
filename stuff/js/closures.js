function addTo(operand1) {
    //console.log(result)

    return function(operand2) {
        var result = operand1 + operand2

        return function(operand3) {
            var result2 = result + operand3

            return result2
        }
    }
}

addTo(10)(1)(4)
15