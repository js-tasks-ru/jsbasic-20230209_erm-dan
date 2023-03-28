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

  // update() {
  //   let id1 = document.getElementById('one');
  //   console.log(id1);
  // }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }


}
