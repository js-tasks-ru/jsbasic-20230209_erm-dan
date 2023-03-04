function highlight(table) {
  let res = table.rows;

  for (let row of res) {
    for (let cell of row.cells) {
      switch (cell.innerText) {
      case "m":
        row.classList.add("male");
        break;
      case "f":
        row.classList.add("female");
        break;
      }
      console.log(cell.outerHTML);
      if (Number(cell.innerText) < 18) {
        row.style.textDecoration = "line-through";
      }

      if (cell.hasAttribute("data-available")) {
        if (cell.dataset.available === "true") {
          row.classList.add("available");
        } else if (cell.dataset.available === "false") {
          row.classList.add("unavailable");
        }
      } else {
        // row.setAttribute('hidden', true);
        row.hidden = true;
      }
    }
  }
}
