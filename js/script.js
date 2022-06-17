AOS.init({
    offset: 120,
    duration: 2000,
  });

  document.querySelectorAll('img')
  .forEach((img) =>
      img.addEventListener('load',() =>
      AOS.refresh()
      )
  );

  
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    pading: 5,
    stagePadding: 5,
    responsive: {
        0 : {
            items: 1,
            dots: false
        },
        485 : {
            items: 2,
            dots: false
        },
        728 : {
            items: 3,
            dots: false
        },
        960 : {
            items: 3,
            dots: false
        },
        1200 : {
            items: 3,
            dots : true
        }
    }
  });