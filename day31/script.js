const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) {
        return
    } 

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand ('copy')
    textarea.remove(
        alert('Passwor copied to clipboard!')
    )
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    // console.log(typesCount)

    //filter is only the boolean in true
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    // console.log(typesArr)

    if (typesCount === 0) {
        return ''
    }

    for (let index = 0; index < length; index += typesCount) {
        typesArr.forEach(type => {
            console.log(type)
            const fucName = Object.keys(type)[0]
            console.log(fucName)
            generatedPassword += randomFunc[fucName]()
        })

    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// console.log(getRandomLower())

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// console.log(getRandomUpper())

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// console.log(getRandomNumber())

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
// console.log(getRandomSymbol())