import createElement from '../../assets/lib/create-element.js';

// пришлось писать функцию по новой так как экспорт из 5 модуля ломает тесты 3 таска из этого модуля
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.position = 0;
    this.render();
    this.addEventListeners();
    // this.initCarousel();
    
  }
  render() {
    this.elem = createElement(`
        <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
          </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
        </div>
      <div class="carousel__inner></div>
    </div>
    `);


    let slides = this.slides.map(item => createElement(`  
      <div class="carousel__slide" data-id="${item.id}">
      <img 
        src="/assets/images/carousel/${item.image}" 
        class="carousel__img" 
        alt="slide" 
      />
      <div class="carousel__caption">
        <span class="carousel__price">€${Number(item.price).toFixed(2)}</span>
        <div class="carousel__title">${item.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>`));

    this.sub(`inner`).append(...slides);
    // this.elem.innerHTML = slides;
    // this.elem.append(...slides);
    
    this.update();
  }

  addEventListeners() {
    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id').dataset.id;

        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: id,
          bubbles: true
        }));
      }

      if (target.closest('.carousel__arrow_right')) {
        this.right();
      }

      if (target.closest('.carousel__arrow_left')) {
        this.left();
      }
    };
  }

  sub(ref) {
    return this.elem.querySelector(`.carousel__${ref}`);
  }

  right() {
    this.position++;
    this.update();
  }

  left() {
    this.position--;
    this.update();
  }

  update() {
    let offset = -this.elem.offsetWidth * this.position;
    this.sub('inner').style.transform = `translateX(${offset}px)`;

    if (this.position == this.slides.length - 1) {
      this.sub('arrow_right').style.display = 'none';
    } else {
      this.sub('arrow_right').style.display = '';
    }

    if (this.position == 0) {
      this.sub('arrow_left').style.display = 'none';
    } else {
      this.sub('arrow_left').style.display = '';
    }
  }

  // createTableHtml() {
  //   let arr = createElement(`
  //   <div class="carousel">
  //   <div class="carousel__arrow carousel__arrow_right">
  //     <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  //   </div>
  //   <div class="carousel__arrow carousel__arrow_left">
  //     <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  //   </div>`
  //   + this.slides.map(item =>createElement(`<div class="carousel__inner">
  //     <div class="carousel__slide" data-id="${item.id}">
  //       <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
  //       <div class="carousel__caption">
  //         <span class="carousel__price">€${Number(item.price).toFixed(2)}</span>
  //         <div class="carousel__title">${item.name}</div>
  //         <button type="button" class="carousel__button">
  //           <img src="/assets/images/icons/plus-icon.svg" alt="icon">
  //         </button>
  //       </div>`)).join('') + `</div>`);

        
  //   this.elem.appendChild(arr);
  //   for (let element of this.elem.querySelectorAll('button')) {
  //     element.addEventListener("click", (event) => {this.handleClick(event);
  //     });
  //   }

    
    
  // }
  // handleClick(event) {
  //   if (event.target.closest('button')) {
  //     let customEV = new CustomEvent("product-add", {
  //       detail: this.slides.id, // Уникальный идентификатора товара из объекта товара
  //       bubbles: true
  //     });
  //     this.elem.dispatchEvent(customEV);
  //   }
  // }

  
}

