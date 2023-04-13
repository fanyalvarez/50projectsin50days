const toggle = document.querySelectorAll(['.toggle'])
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const good = document.getElementById('good')

toggle.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false
        }
        if (cheap === theClickedOne) {
            good.checked = false
        }
        if (fast === theClickedOne) {
            cheap.checked = false
        }

    }
}