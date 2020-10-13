function map(vals, expression){
    var result = []
    // for(number in vals){
    for(let i=0; i<vals.lenght; i++){
        number = vals[i]
        var calc = expression(number);
        result.push(calc);
    }
    return result
}