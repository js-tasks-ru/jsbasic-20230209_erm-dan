

function truncate(str, maxlength) {
  // let res = '';
  if (str.length > maxlength) {
    let res = str.substr(0, maxlength - 1) + "…";
    return res;
  }
  return str;
}
