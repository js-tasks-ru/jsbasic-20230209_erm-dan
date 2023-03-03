function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let element of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${element.firstName} ${element.lastName}`;
    ul.appendChild(li);
  }
  return ul;
}
