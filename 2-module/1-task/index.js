function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && salaries[key] != 'Infinity' && salaries[key] != '-Infinity' && Number.isNaN(salaries[key]) == false) {
       sum += salaries[key];
    }
  }
  return sum;
}


