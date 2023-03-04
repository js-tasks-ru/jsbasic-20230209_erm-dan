// let res = document.body.firstElementChild;
// let res1 = res.rows;

function makeDiagonalRed(table) {
  let res1 = table.rows;

  
  for (let i = 0; i < res1.length; i++) {
    res1[i].cells[i].style.backgroundColor = 'red';
  }
  
}


