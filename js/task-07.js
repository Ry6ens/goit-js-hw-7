const ref = document.getElementById('font-size-control')
const textRef = document.getElementById('text')

const changeFontSizeText = ref.addEventListener('input', changeSizeText)

function changeSizeText(ev) {
    const fontSize = Number(ev.currentTarget.value)
    textRef.setAttribute('style', `font-size: ${fontSize}`)
}