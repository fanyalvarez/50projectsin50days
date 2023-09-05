const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e)=>{
    const input = e.target.value
    // console.log(input)

    const length = input.length
    console.log(20 - length * 2 );
    const bluerValue = 20 - length * 2
    background.style.filter = `blur(${bluerValue}px)`

})