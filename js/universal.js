var myCarousel = document.querySelector('#carouselCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  ride: true
  
})

myCarousel.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') 
})

carousel.to('1') 
carousel.to('2') 
