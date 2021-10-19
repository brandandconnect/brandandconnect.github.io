const serviceButtonShow = document.getElementById('service-button-show')
const serviceButtonHide = document.getElementById('service-button-hide')
const serviceList = document.getElementById('service__list')



function showService () {
    serviceList.classList.toggle('service__listActive')
    serviceButtonHide.style.display = 'flex'
    serviceButtonShow.style.display = 'none'
}

function hideService () {
    serviceList.classList.remove('service__listActive')
    serviceButtonHide.style.display = 'none'
    serviceButtonShow.style.display = 'flex'
}