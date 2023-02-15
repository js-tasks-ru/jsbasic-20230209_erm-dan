
let res = '';
function checkSpam(str) {
  res = str.toLowerCase();
  if (res.includes("1xbet") || res.includes("xxx")) {
    return true;
  }
  return false;
}
