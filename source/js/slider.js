const sliderButtonBefore = document.getElementById('slider-button-before');
const sliderButtonAfter = document.getElementById('slider-button-after');
const sliderTumbler = document.querySelector('.slider__tumbler');
const sliderItems = document.querySelectorAll('.slider__item');

const sliderItemBefore = sliderItems[0];
const sliderItemAfter = sliderItems[1];

sliderButtonBefore.addEventListener('click', () => {
  sliderTumbler.classList.remove('slider__tumbler--position-after');
  sliderTumbler.classList.add('slider__tumbler--position-before');
  sliderItemAfter.classList.remove('slider__item--active');
  sliderItemAfter.classList.add('slider__item--deactive');
  sliderItemBefore.classList.remove('slider__item--deactive');
  sliderItemBefore.classList.add('slider__item--active');
});

sliderButtonAfter.addEventListener('click', () => {
  sliderTumbler.classList.remove('slider__tumbler--position-before')
  sliderTumbler.classList.add('slider__tumbler--position-after');
  sliderItemBefore.classList.remove('slider__item--active');
  sliderItemBefore.classList.add('slider__item--deactive');
  sliderItemAfter.classList.remove('slider__item--deactive');
  sliderItemAfter.classList.add('slider__item--active');
})
