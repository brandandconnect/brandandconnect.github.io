const accordionBtn = document.querySelectorAll('.faq__accordion--item__question')
const showAnswer = document.querySelectorAll('.faq__accordion--item__answer')


accordionBtn.forEach ( btn => {
    btn.addEventListener ( 'click', (e) => {

        showAnswer.forEach((show) => {
            if (e.target.nextElementSibling !== show && show.classList.contains('active')
            ) {
                show.classList.remove('active')
                accordionBtn.forEach((btn) => btn.classList.remove('active') )
            }
        })

        const  panel = btn.nextElementSibling
        panel.classList.toggle('active')
        btn.classList.toggle('active')
    } )
})

/* 
window.onclick = (e) => {
    if (!e.target.matches('.faq__accordion--item__question')) {
        accordionBtn.forEach((btn) => btn.classList.remove('active'))
        showAnswer.forEach((show) => show.classList.remove('active'))
    }
} */