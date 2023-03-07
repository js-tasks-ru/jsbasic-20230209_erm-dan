function toggleText() {
  let res1 = document.getElementsByClassName("toggle-text-button");
  res1[0].onclick = () => {
    document.getElementById("text").hidden = !document.getElementById("text").hidden;
  
  }
   
  
  
}
