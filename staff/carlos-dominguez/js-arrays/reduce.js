function reduce(vals, expression){
  var result = 0;
  for(var i=0;i<vals.length;i++){
    result = expression(result, vals[i]);
  }
  return result;
}