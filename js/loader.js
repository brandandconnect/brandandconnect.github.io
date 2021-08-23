content = setTimeout (function loading() {
    const loader = document.getElementById('loader')
    loader.style.visibility='hidden'
    loader.style.opacity=0
    }, 1000
)

window.onload = content