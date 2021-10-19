


const burguer = document.getElementById('burguer')
let showMenu = document.getElementById('showMenu')
let closeMenu = document.getElementById('close-menu')
let openMenu = document.getElementById('open-menu')

let menuStatus

function show() {
    showMenu.style.left = 0
    closeMenu.style.display = 'initial'
    openMenu.style.display = 'none'
}

function hide() {
    showMenu.style.left = '100vw'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'initial'
}







