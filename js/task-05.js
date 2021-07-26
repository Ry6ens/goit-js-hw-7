const refs = {
    inputName: document.getElementById('name-input'),
    nameLabel: document.getElementById('name-output')
};

refs.inputName.addEventListener('input', OnInputChange)

function OnInputChange(event) {
    //refs.nameLabel.textContent = event.currentTarget.value
    if (event.currentTarget.value.trim() === '') {
        refs.nameLabel.textContent = 'незнакомец'
    } else {
        refs.nameLabel.textContent = event.currentTarget.value
    }
}