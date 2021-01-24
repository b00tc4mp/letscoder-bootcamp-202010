function map(vals, expression){
  var result = [];
  if(!(vals instanceof Array)) throw new TypeError(vals+" no es un array");
  if(typeof expression !== "function") throw new TypeError("tienes que pasar un funcion como parametro");
  for(var i=0;i<vals.length;i++){
  // for(number in vals){
    var calc = expression(vals[i]);
    result.push(calc);
  }
  return result;
}