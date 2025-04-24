$('.portfolio-slider-1').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 15000,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"90px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"80px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"70px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.portfolio-slider-2').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 15000,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 4,
  slidesToScroll: -1,
  centerMode:true,
  centerPadding:"90px",
  cssEase: 'linear',
  rtl:true,
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"80px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"70px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.service-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 1300,
  autoplay:true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"90px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"30px",
      }
    },
  ]
});

$('.why-choose-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 15000,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"290px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"220px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"190px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"150px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"80px",
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"20px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.testimonial-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 1000,
  autoplay:true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"290px",
  // cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"220px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"190px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"150px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"80px",
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"20px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
ScrollReveal({ mobile: false });

ScrollReveal().reveal('.bi-header', { scale: 1, duration: 1000, distance: '-50px'});
ScrollReveal().reveal('.hero-content h1', { duration: 1000, delay: 300, distance: '-20px'});
ScrollReveal().reveal('.hero-form', { duration: 1000, delay: 500, distance: '-50px' });
ScrollReveal().reveal('.hero-img', { duration: 1000, delay: 700, scale: 0.1, interval: 200 });
ScrollReveal().reveal('.hero-review-wrapper img', { duration: 1000, delay: 700, interval: 200 });




ScrollReveal().reveal('.service-anim', { duration: 1000, origin: 'right', delay: 500, distance: '-50px', interval: 200 });
ScrollReveal().reveal('.service-pop-anim', { duration: 1000, delay: 1000, scale:0 , interval: 200 });
ScrollReveal().reveal('.service-main-anim', { duration: 1000, delay: 800, scale:0 , interval: 200 });



ScrollReveal().reveal('.cta-anim', { duration: 1000, origin: 'left', delay: 500, distance: '-50px', interval: 200 });
ScrollReveal().reveal('.cta-up-anim', { duration: 1000, origin: 'bottom', delay: 800, distance: '20px', interval: 200 });
ScrollReveal().reveal('.cta-img-anim', { duration: 1000, scale: 0, delay: 1000 });



ScrollReveal().reveal('.portfolio-img-anim', {duration: 1000, origin: 'bottom', delay: 800, distance: '20px', interval: 500});



ScrollReveal().reveal('.package-anim', {duration: 1000, origin: 'bottom', delay: 800, distance: '20px', interval: 300});
ScrollReveal().reveal('.pack-box-anim', {duration: 1000, origin: 'bottom', delay: 800, scale:0, interval: 300});



ScrollReveal().reveal('.why-choose-anim', {duration: 1000, origin: 'bottom', delay: 800, distance: '20px', interval: 300});



ScrollReveal().reveal('.contact-anim', {duration: 1000, origin: 'left', delay: 800, distance: '20px', interval: 100});
ScrollReveal().reveal('.contact-img', {duration: 1000, scale:0, delay: 1200});



ScrollReveal().reveal('.footer-anim', {duration: 1000, origin: 'bottom', delay: 800, distance: '20px', interval: 200});