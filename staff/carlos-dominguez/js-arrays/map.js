function map(vals, expression){
  var result = [];
  for(let i=0;i<vals.length;i++){
  // for(number in vals){
    var calc = expression(vals[i]);
    result.push(calc);
  }
  return result;
}