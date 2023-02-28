function getMinMax(str) {
  let res = str.split(' ')
  .filter(element => isNaN(element) === false)
  .map(element => Number(element));



  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }

  let min = getMinOfArray(res);
  let max = getMaxOfArray(res);
  let result = {
    'min': min,
    'max': max,
  };

  return result;


  
  
  
 
 
}
