function find(vals, expression){
  for(var i=0;i<vals.length;i++){
    if(expression(vals[i])){      
      return vals[i];
    } 
  }
  return false;
}