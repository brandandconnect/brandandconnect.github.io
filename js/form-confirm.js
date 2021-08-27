const $subscribe = document.querySelector('#subscribe')
$subscribe.addEventListener('submit', go)

const $modal = document.querySelector('#subscribeModal')
const $openModal = document.querySelector('#subscribeButton')
const $closeModal = document.querySelector('#close')
const $modalContainer = document.querySelector('#subscribeModal__container')

/*         $openModal.addEventListener('click', goModal) */
$closeModal.addEventListener('click', finishModal)


function goModal(event) {
    $modalContainer.style.opacity = 1
    $modalContainer.style.visibility = 'visible'
    $modal.classList.toggle('modalClose')
    setTimeout(function(){},1000)
}

function finishModal(event) {
    event.preventDefault()
    $modalContainer.style.opacity = 0
    $modalContainer.style.visibility = 'hidden'
    $modal.classList.toggle('modalClose')
    setTimeout(function(){},1000)
}

async function go(event) {
    event.preventDefault()
    const subscribe = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: subscribe,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        goModal()
    }
}

