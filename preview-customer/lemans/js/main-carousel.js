new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 1024px
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0,
        }
      }
    ]
});