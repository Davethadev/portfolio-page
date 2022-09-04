const hamburgerIcon = document.querySelector('.hamburger-icon')
const headerLinksMobile = document.querySelector('.header-links-mobile')
const mobileLinks = document.querySelectorAll('.mobile-link')
const buttons = document.querySelectorAll('button')



hamburgerIcon.addEventListener('click', function() {
    headerLinksMobile.classList.toggle('active')
})

mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        headerLinksMobile.classList.toggle('active')
    })
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        headerLinksMobile.classList.toggle('active')
    })
})