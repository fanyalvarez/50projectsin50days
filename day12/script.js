// -Bring in toogle buttons (querySelectorAll)
// -loop through NodeList(forEach)
// -add click event (addEventListener)
// -toggle the active class on the parent node 
// (.parentNOde & classList.toggle())



const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {

        toggle.parentNode.classList.toggle('active')

    })
})

