import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    console.log(categories.length)
    // this.elem = document.createElement('div');
    this.render();
    this.handleClick();
    this.position = 6;
  }

  render() {
    this.elem = createElement(`
    <div class="ribbon">
    <button id="btnLeft" class="ribbon__arrow ribbon__arrow_left  ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner"></nav>
     <button id="btnRight" class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button> 
  </div>
`);


    let categories = this.categories.map(item => createElement(`  
    <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`));
    categories.forEach(element => {
      this.sub(`inner`).append(element);
    });
   

    // this.handleClick();
    // this.elem.innerHTML = arr;
    
    
  }

  
  handleClick = () => {
    this.elem.onclick = ({target}) => {
      //место дял кастомного события
      let button = target.closest('.ribbon__item');
      if (button) {
        let id = target.closest('[data-id').dataset.id;

        this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
          detail: id,
          bubbles: true,
        }));
      }




      if (target.closest('.ribbon__arrow_right')) {
        this.right();
      }
      if (target.closest('.ribbon__arrow_left')) {
        this.left();
      }
    }
  //   let btnRight = document.getElementById('btnRight'); // левая
  //   let btnLeft = document.getElementById('btnLeft'); // правая
  //   let oblojka = this.sub('inner');
  //   console.log(btnLeft);
  //   let scrscrLeft = oblojka.scrollLeft;
  //   let scrollWidthh = oblojka.scrollWidth;
  //   let clientWidthh = oblojka.clientWidth;
  //   console.log(scrscrLeft); // 0
  //   console.log(scrollWidthh); // 1523
  //   console.log(clientWidthh); // 988
   
  //   // oblojka.scrollLeft
  //   let scrollRight = scrollWidthh - scrscrLeft - clientWidthh;
  //    console.log(scrollRight);

  //   btnRight.onclick = () => {
  //     oblojka.scrollBy(350, 0);
  //     if (scrollRight) {
  //       btnRight.classList.remove('ribbon__arrow_visible');
        
  //     } else {
  //       btnRight.classList.add('ribbon__arrow_visible');
  //     } 
  //   }

  //   btnLeft.onclick = () => {
  //     oblojka.scrollBy(-350, 0);
  //     if (scrscrLeft) {
  //       btnLeft.classList.remove('ribbon__arrow_visible');
        
  //     } else {
  //       btnLeft.classList.add('ribbon__arrow_visible');
  //     } 
  //   }
    
  // //   btnRight.onclick = () => {
  // //     this.sub(`inner`).scrollBy(-350, 0);
  // //     this.position--;
  // //     console.log(this.position)
  // //     if (this.position == 6) {
  // //       btnRight.classList.remove('ribbon__arrow_visible');
        
  // //     } else {
  // //       btnRight.classList.add('ribbon__arrow_visible');
  // //     } 
      
      
      

      
  // //   }
  // //   btnLeft.onclick = () => {
  // //     this.sub(`inner`).scrollBy(350, 0); 
  // //     let scrollLeft = btnLeft.scrollLeft;
  // //     console.log(scrollLeft)
     
  // //     this.position++;
  // //     if (this.position == this.categories.length) {
  // //       btnLeft.classList.remove('ribbon__arrow_visible');
        
  // //     } else {
  // //       btnLeft.classList.add('ribbon__arrow_visible');
  // //     } 
      
  // //   }
  // // }
  }

  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`);
  }

  right() {
    this.sub('inner').scrollBy(350, 0);
    this.update();
  }

  left() {
    this.sub('inner').scrollBy(-350, 0);
    this.update();
  }

  update() {
    let btnRight = document.getElementById('btnRight'); // левая
    let btnLeft = document.getElementById('btnLeft'); // правая
    let oblojka = this.sub('inner');
    console.log(btnLeft);
    let scrscrLeft = oblojka.scrollLeft;
    let scrollWidthh = oblojka.scrollWidth;
    let clientWidthh = oblojka.clientWidth;
    let scrollRight = scrollWidthh - scrscrLeft - clientWidthh;
    console.log(scrollRight);

    if (scrscrLeft == 0) {
      btnLeft.classList.remove('ribbon__arrow_visible');
        
    } else {
      btnLeft.classList.add('ribbon__arrow_visible');
    } 


    if (scrollRight == 0) {
      btnRight.classList.remove('ribbon__arrow_visible');
    } else {
      btnRight.classList.add('ribbon__arrow_visible');
    }
    
  }

  
  }
 