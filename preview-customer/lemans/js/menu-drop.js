const drop = document.getElementById('dropShow')
const chevroIcon = document.getElementById('chevron')

function showItem() {
    drop.classList.toggle('header__menu--navbar__serviceOn')
    chevroIcon.classList.toggle('chevron-up')
}