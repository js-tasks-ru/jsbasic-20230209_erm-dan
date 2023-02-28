function filterRange(arr, a, b) {
  let res = arr.filter((element) =>{
    if (element >= a && element <= b) {
      return element;

    }
  });
  return res;
}
