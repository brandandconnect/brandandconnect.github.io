new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
});