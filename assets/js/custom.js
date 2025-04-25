$('.logos-sliders').slick({
  dots: false,
  arrows:false,
  infinite: true,
  pauseOnFocus:false,
  pauseOnHover:false,
  speed: 7100,
  autoplay:true,
  autoplaySpeed: 0,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"290px",
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1398,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding:"190px",
      }
    },
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"130px",
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding:"90px",
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"60px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding:"40px",
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


const data = [
  {
      name: 'Ava Johnson',
      packageName: 'Silver Package',
      time: '4 hours ago'
  },
  {
      name: 'Liam Parker',
      packageName: 'Gold Package',
      time: '2 days ago'
  },
  {
      name: 'Sophia Martinez',
      packageName: 'Platinum Package',
      time: '1 week ago'
  },
  {
      name: 'Noah Wilson',
      packageName: 'Diamond Package',
      time: '3 hours ago'
  },
  {
      name: 'Olivia Brown',
      packageName: 'Titanum Package',
      time: '6 days ago'
  },
  {
      name: 'Mason Thompson',
      packageName: 'Horizon Package',
      time: '1 day ago'
  },
  {
      name: 'Isabella White',
      packageName: 'Silver Package',
      time: '2 hours ago'
  },
  {
      name: 'Ethan Harris',
      packageName: 'Gold Package',
      time: '5 days ago'
  },
  {
      name: 'Mia Clark',
      packageName: 'Platinum Package',
      time: '1 week ago'
  },
  {
      name: 'James Lewis',
      packageName: 'Diamond Package',
      time: '3 days ago'
  },
  {
      name: 'Amelia Young',
      packageName: 'Titanium Package',
      time: '4 days ago'
  },
  {
      name: 'Charlotte Allen',
      packageName: 'Silver Package',
      time: '9 hours ago'
  },
  {
      name: 'Elijah King',
      packageName: 'Gold Package',
      time: '2 weeks ago'
  },
  {
      name: 'Emily Scott',
      packageName: 'Platinum Package',
      time: '5 hours ago'
  },
  {
      name: 'Lucas Green',
      packageName: 'Diamond Package',
      time: '2 days ago'
  },
]


const alertBox = document.querySelector(".bi-alertbox");

const alertName = document.getElementById("alert-name");
const alertPackage = document.getElementById("alert-package");
const alertHour = document.getElementById("alert-hour");


alertBox.style.transition = "opacity 0.5s ease";
alertBox.style.opacity = 1;

function showAlertCycle() {
  const random = data[Math.floor(Math.random() * data.length)];

  alertName.textContent = random.name;
  alertPackage.textContent = random.packageName;
  alertHour.textContent = random.time;

  alertBox.style.opacity = 1;

  setTimeout(() => {
    alertBox.style.opacity = 0;

    // Wait 3 seconds, then show a new alert
    setTimeout(showAlertCycle, 8000);
  }, 4000); // Visible for 4 seconds
}

// Start the loop
showAlertCycle();




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
  dots: true,
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