import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.addEventListeners();
    // this.update();
    this.myValue(value);
 
  }

  render() {
    this.elem = createElement(`
    <div class="slider">
    
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
    
      <div class="slider__progress"></div>
    
      <div class="slider__steps">
        ${`<span></span>`.repeat(this.steps)}
      </div>
    </div>`);
  }

  addEventListeners() {
    this.sub('thumb').ondragstart = () => false;
    this.sub('thumb').onpointerdown = this.pointerDown;
    this.elem.onclick = this.onClick;
    
  }


  myValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;
    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;
    this.sub('value').innerHTML = value;
    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  onClick = (event) => {
    let myLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    this.myValue(Math.round(this.segments * myLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  pointerDown = event => {
    event.preventDefault();

    this.elem.classList.add('slider_dragging');

    document.addEventListener('pointermove', this.pointerMove);
    document.addEventListener('pointerup', this.pointerUp);
  }


  pointerMove = (event) => {
    event.preventDefault();
    let myLeft = this.leftByEvent(event);
    this.sub('thumb').style.left = `${myLeft * 100}%`;
    this.sub('progress').style.width = `${myLeft * 100}%`;
    this.value = Math.round(this.segments * myLeft);
    this.sub('value').innerHTML = this.value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }


  leftByEvent(event) {
    let myLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;
    if (myLeft < 0) { myLeft = 0; }
    if (myLeft > 1) { myLeft = 1; }

    return myLeft;
  }


  pointerUp = () => {
    document.removeEventListener('pointermove', this.pointerMove);
    document.removeEventListener('pointerup', this.pointerUp);

    this.elem.classList.remove('slider_dragging');

    // stick to the final value
    this.sub('thumb').style.left = `${(this.value / this.segments) * 100}%`;
    this.sub('progress').style.width = `${(this.value / this.segments) * 100}%`;

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  };

  // update() {
  //   let id1 = document.getElementById('one');
  //   console.log(id1);
  // }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }


}
