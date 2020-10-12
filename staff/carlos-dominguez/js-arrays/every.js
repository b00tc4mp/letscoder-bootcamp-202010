function every(vals, expression){
  for(let i=0;i<vals.length;i++){
  // for(value in vals){
      if(!expression(vals[i])){
        return false;
      } 
    }
    return true;
  }