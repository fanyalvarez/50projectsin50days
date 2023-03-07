const tagsEl = document.getElementById('tags')
const textareaEl = document.getElementById('textarea')

textareaEl.focus()

textareaEl.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //////
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }

})

function createTags(input) {
    // console.log(input) 
    const tags = input.split(',').filter(tag => tag.trim()
        !== '').map(tag => tag.trim())
    console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    })

}

function randomSelect() {
    // console.log(123)
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highligthtTag(randomTag)

            setTimeout(() => {
                unhighligthtTag(randomTag)
            }, 100)
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highligthtTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highligthtTag(tag) {
    tag.classList.add('highligtht')
}

function unhighligthtTag(tag) {
    tag.classList.remove('highligtht')
}