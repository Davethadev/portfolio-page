const hamburgerIcon = document.querySelector('.hamburger-icon')
const headerLinksMobile = document.querySelector('.header-links-mobile')

hamburgerIcon.addEventListener('click', function() {
    headerLinksMobile.classList.toggle('active')
})