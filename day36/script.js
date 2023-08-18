const container = document.getElementById('container')
const colors = ['#963484', '#3066be', '#60AFFF', '#28C2FF', '#2af5ff']
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(elements) {
    // console.log(elements);
    const color = getRandomColor()
    elements.style.background = color
    elements.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
}

function removeColor(elements) {
    // console.log(123);
    elements.style.background = ' #252525'
    elements.style.boxShadow = ` 0 0 2px #000`

}

function getRandomColor(params) {
    return colors[Math.floor(Math.random() * colors.length)]
}