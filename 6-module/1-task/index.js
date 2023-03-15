/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.createTableHtml();
  }

  createTableHtml() {
    let arr = `
    <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарпалата</th>
      <th>Город</th>
      
    </tr>
    </thead>
    <tbody>` + this.rows.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><button>X</button></td>
    </tr>`).join('') + `</tbody>`;

    this.elem.innerHTML = arr;
    for (let element of this.elem.querySelectorAll('button'))
      {element.addEventListener("click", this.handleClick);}
  }

  handleClick(event) {
    if (event.target.closest('button')) {
      event.target.closest('tr').remove();
    }
  }
}
