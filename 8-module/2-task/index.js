import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
  }

  render() {
    this.elem = createElement(`<div class="products-grid">
    <div class="products-grid__inner">
    </div>
  </div>`);

    this.createEl();
  }

  createEl() {
    this.sub('inner').innerHTML = '';
    for (let elements of this.products) {
      if (this.filters.noNuts && elements.nuts) {continue;}
      if (this.filters.vegeterianOnly && !elements.vegeterian) {continue;}
      if (this.filters.maxSpiciness !== undefined && elements.spiciness > this.filters.maxSpiciness) {continue;}
      if (this.filters.category && elements.category != this.filters.category) {continue;}
      let card = new ProductCard(elements);
      this.sub('inner').append(card.elem);

    }
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    this.createEl();
  }

  sub(ref) {
    return this.elem.querySelector(`.products-grid__${ref}`);
  }
}
