function find(vals, expression){
  console.log("Hola");
  for(let i=0;i<vals.length;i++){
  // for(value in vals){
    if(expression(vals[i])){
      return vals[i];
    } 
  }
  return "nada";
}