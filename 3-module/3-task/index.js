function camelize(str) {
  let res = str.split('-')
  .map((element, i) => i == 0? element : element[0].toUpperCase() + element.slice(1))
    
  
  .join('');
  return res;
}
