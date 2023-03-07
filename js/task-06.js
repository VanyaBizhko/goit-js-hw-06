const validationInputRef = document.querySelector('#validation-input');

const onInputBlur = () => {
const inputLength = validationInputRef.getAttribute('data-length');
const inputValue = validationInputRef.value.length;

if (inputValue === Number(inputLength)) {
validationInputRef.classList.add('valid');
validationInputRef.classList.remove('invalid');
} else {
validationInputRef.classList.add('invalid');
validationInputRef.classList.remove('valid');
}
};

validationInputRef.addEventListener('blur', onInputBlur);