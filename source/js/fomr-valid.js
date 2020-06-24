const invalidClassName = 'keyboard-input__field--invalid';
const keyInputs = document.querySelectorAll('.keyboard-input__field');

keyInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
      }
    }
  });

  input.addEventListener('focusout', () => {
    if (input.validity.valid) {
      if (input.classList.contains(invalidClassName)) {
        input.classList.remove(invalidClassName);
        return;
      }
    return;
    }
    input.classList.add(invalidClassName);
  });

  input.addEventListener('invalid', () => {
    input.classList.add(invalidClassName);
  });
});
