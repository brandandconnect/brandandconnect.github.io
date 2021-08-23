window.addEventListener('load', function () {
    new Glider(document.querySelector('.main__carousel'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        raggable: true,
        dots: '.carousel-indicator',
        arrows: {
          prev: '.carousel-previous',
          next: '.carousel-next'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 768,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: '2',
              slidesToScroll: '2',
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
    })
})