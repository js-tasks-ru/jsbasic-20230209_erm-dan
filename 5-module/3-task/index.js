
   function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let width = document.querySelector('.carousel__inner');
  let slidesQuantity = document.querySelectorAll('.carousel__slide').length;
  console.log(document.querySelectorAll('.carousel__slide').length); //4
  
  let position = 0;

  arrowLeft.style.display = 'none';
  console.log(width.offsetWidth); //988

  arrowLeft.onclick = () => {
    arrowRight.style.display = '';
    position -= 1;
    translate(position * width.offsetWidth);
    if (position === 0) {
      arrowLeft.style.display = 'none';
    }
  }
  
  arrowRight.onclick = () => {
    arrowLeft.style.display = '';
    position += 1;
    translate(position * width.offsetWidth);
    if (position === (slidesQuantity - 1)) {
      arrowRight.style.display = 'none';
    }
  }

  function translate(position) {
    width.style.transform = `translateX(-${position}px)`;
  }
}
