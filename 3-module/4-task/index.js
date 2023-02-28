function showSalary(users, age) {
  let res = users.filter(element => element.age <= age);
  let res1 = res.map((element, index) => index == res.length - 1 ? `${element.name}, ${element.balance}` : `${element.name}, ${element.balance}` + `\n`).join('');
  

 return res1;
}
