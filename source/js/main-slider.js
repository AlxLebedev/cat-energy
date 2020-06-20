const sliderButtonBefore = document.getElementById('slider-button-before');
const sliderButtonAfter = document.getElementById('slider-button-after');
const sliderTumblerContainer = document.querySelector('.slider__tumbler-container');
const sliderItems = document.querySelectorAll('.slider__item');

const sliderItemBefore = sliderItems[0];
const sliderItemAfter = sliderItems[1];

sliderButtonBefore.addEventListener('click', () => {
  sliderItemAfter.classList.remove('slider__item--active');
  sliderItemBefore.classList.add('slider__item--active');
  sliderTumblerContainer.classList.toggle('slider__tumbler-container--tumbler-after');
});

sliderButtonAfter.addEventListener('click', () => {
  sliderItemBefore.classList.remove('slider__item--active');
  sliderItemAfter.classList.add('slider__item--active');
  sliderTumblerContainer.classList.toggle('slider__tumbler-container--tumbler-after');
})
