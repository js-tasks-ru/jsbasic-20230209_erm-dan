import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.createTableHtml();
  }

  createTableHtml() {
    // console.log(this.product.name);
    // console.log(`€${Number(this.product.price).toFixed(2)}`);
    let arr = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${Number(this.product.price).toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);

    // this.elem.addEventListener("product-add", event => {
    //   console.log('событие');
    // });

    this.elem.appendChild(arr);
    for (let element of this.elem.querySelectorAll('button')) {
      element.addEventListener("click", (event) => {this.handleClick(event);
      });
    }
  }

  
  handleClick(event) {
    if (event.target.closest('button')) {
      let customEV = new CustomEvent("product-add", {
        detail: this.product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true
      });
      this.elem.dispatchEvent(customEV);
    }
  }
    
    
}
