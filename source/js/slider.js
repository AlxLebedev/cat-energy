const sliderButtonBefore = document.getElementById('slider-button-before');
const sliderButtonAfter = document.getElementById('slider-button-after');
const sliderTumbler = document.querySelector('.slider__tumbler');
const sliderItems = document.querySelectorAll('.slider__item');

const sliderItemBefore = sliderItems[0];
const sliderItemAfter = sliderItems[1];

sliderButtonBefore.addEventListener('click', () => {
  if (!sliderTumbler.classList.contains('slider__tumbler--position-after')) {
    return;
  }
  sliderTumbler.classList.toggle('slider__tumbler--position-after');
  sliderItemAfter.classList.remove('slider__item--active');
  sliderItemAfter.classList.add('slider__item--deactive');
  sliderItemBefore.classList.remove('slider__item--deactive');
  sliderItemBefore.classList.add('slider__item--active');
});

sliderButtonAfter.addEventListener('click', () => {
  if (sliderTumbler.classList.contains('slider__tumbler--position-after')) {
    return;
  }
  sliderTumbler.classList.toggle('slider__tumbler--position-after');
  sliderItemBefore.classList.remove('slider__item--active');
  sliderItemBefore.classList.add('slider__item--deactive');
  sliderItemAfter.classList.remove('slider__item--deactive');
  sliderItemAfter.classList.add('slider__item--active');
})
