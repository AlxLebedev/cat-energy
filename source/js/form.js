const invalidClassName = 'keyboard-input__field--invalid';
const invalidIconClaccName = 'keyboard-input__icon--invalid';
const validIconClassName = 'keyboard-input__icon--valid';
const keyInputs = document.querySelectorAll('.keyboard-input__field');
let currentIcon = null;

keyInputs.forEach(input => {
  input.addEventListener('input', (event) => {
    if (event.target.nextElementSibling) {
      currentIcon = event.target.nextElementSibling;
    }

    if (input.validity.valid) {
      if (currentIcon && currentIcon.classList.contains(invalidIconClaccName)) {
        currentIcon.classList.remove(invalidIconClaccName);
        currentIcon.classList.add(validIconClassName);
      }
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
      }
    }
  });

  input.addEventListener('focusout', (event) => {
    if (event.target.nextElementSibling) {
      currentIcon = event.target.nextElementSibling;
    }

    if (input.validity.valid) {
      if (currentIcon && currentIcon.classList.contains(invalidIconClaccName)) {
        currentIcon.classList.remove(invalidIconClaccName);
        currentIcon.classList.add(validIconClassName);
      }
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
        return;
      }
    return;
    }
    input.classList.add(invalidClassName);
    if (currentIcon) {
      currentIcon.classList.remove(validIconClassName);
      currentIcon.classList.add(invalidIconClaccName);
    }
  });

  input.addEventListener('invalid', () => {
    input.classList.add(invalidClassName);
    if (input.nextElementSibling) {
      input.nextElementSibling.classList.add(invalidIconClaccName);
    }
  });
});
