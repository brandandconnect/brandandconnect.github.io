const float = document.getElementById('floatButton')
let scroll = window.pageYOffset

window.onscroll = function ( ) {
    let reset = window.pageYOffset
    if (scroll >= 465) {
        float.style.visibility='visible'
    } else {
        float.style.visibility='hidden'
    }
    scroll = reset
}