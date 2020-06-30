const invalidClassName = 'input-keyboard__field--invalid';
const invalidIconClaccName = 'input-keyboard__icon--invalid';
const validIconClassName = 'input-keyboard__icon--valid';
const keyInputs = document.querySelectorAll('.input-keyboard__field');

keyInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      if (input.nextElementSibling) {
        input.nextElementSibling.classList.remove(invalidIconClaccName);
        input.nextElementSibling.classList.add(validIconClassName);
      }
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
      }
    }
  });

  input.addEventListener('focusout', () => {
    if (input.validity.valid) {
      if (input.nextElementSibling) {
        input.nextElementSibling.classList.remove(invalidIconClaccName);
        input.nextElementSibling.classList.add(validIconClassName);
      }
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
        return;
      }
    return;
    }
    input.classList.add(invalidClassName);
    if (input.nextElementSibling) {
      input.nextElementSibling.classList.remove(validIconClassName);
      input.nextElementSibling.classList.add(invalidIconClaccName);
    }
  });

  input.addEventListener('invalid', () => {
    input.classList.add(invalidClassName);
    if (input.nextElementSibling) {
      if (!input.validity.valid) {
        input.nextElementSibling.classList.add(invalidIconClaccName);
      }
    }
  });
});
