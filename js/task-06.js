const ref = {
    input: document.getElementById('validation-input')
}

const validation = ref.input.addEventListener('change', number)

function number() {
    if ((this.getAttribute('data-length') != ref.input.value.length)) {
        ref.input.classList.add('invalid')
    } else {
        ref.input.classList.remove('invalid')
        ref.input.classList.add('valid')
    }
}