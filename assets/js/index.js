document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const Header = document.querySelector('#header');
  const headerIcon = document.querySelector('#header i')
  const Navbar = document.querySelectorAll('#navbar a');
  const donateBtn = document.querySelector('#header .btn');

  // const redRadioLabel = document.getElementById('redLabel');
  // const greenRadioLabel = document.getElementById('greenLabel');
  // const yellowRadioLabel =  document.getElementById('yellowLabel');

  function updateHeader() {
    if (window.scrollY > 80) {
      Header.classList.remove('transparent');
      Header.classList.add('sticked');

      Navbar.forEach(navbarlink => {
        navbarlink.classList.add('sticked');
        navbarlink.classList.remove('transparent');
      });

      donateBtn.classList.add('btn-donate-btn-red');
      donateBtn.classList.remove('btn-outline-donate-btn-red');

      headerIcon.classList.add('icon-red');

      // redRadioLabel.classList.add('btn-red-radio');
      // greenRadioLabel.classList.add('btn-green-radio');
      // yellowRadioLabel.classList.add('btn-yellow-radio');

      // redRadioLabel.classList.remove('btn-outline-red-radio');
      // greenRadioLabel.classList.remove('btn-outline-green-radio');
      // yellowRadioLabel.classList.remove('btn-outline-yellow-radio');

    } else {
      Header.classList.remove('sticked');
      Header.classList.add('transparent');

      Navbar.forEach(navbarlink => {
        navbarlink.classList.remove('sticked');
        navbarlink.classList.add('transparent');
      });

      donateBtn.classList.add('btn-outline-donate-btn-red');
      donateBtn.classList.remove('btn-donate-btn-red');

      headerIcon.classList.remove('icon-red');

      // redRadioLabel.classList.add('btn-outline-red-radio');
      // greenRadioLabel.classList.add('btn-outline-green-radio');
      // yellowRadioLabel.classList.add('btn-outline-yellow-radio');

      // redRadioLabel.classList.remove('btn-red-radio');
      // greenRadioLabel.classList.remove('btn-green-radio');
      // yellowRadioLabel.classList.remove('btn-yellow-radio');

    }}

  window.addEventListener('load', updateHeader);
  document.addEventListener('scroll', updateHeader);


  function navbarlinksActive() {
    Navbar.forEach(navbarlink => {

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }

  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  // const redRadio = document.getElementById("redRadio");

  // const greenRadio = document.getElementById("greenRadio");

  // const yellowRadio = document.getElementById("yellowRadio");

  // redRadio.addEventListener("click", function() {
  //   document.documentElement.style.setProperty("--color-primary", "#CE1212");
  // });

  // greenRadio.addEventListener("click", function() {
  //   document.documentElement.style.setProperty("--color-primary", "#228B22");
  // });

  // yellowRadio.addEventListener("click", function() {
  //   document.documentElement.style.setProperty("--color-primary", "#FADA5E");
  // });

  const scrollTop = document.querySelector('.scroll-top');


  const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));


  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  new Swiper('.testimonials-slide', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  new Swiper('.news-slider', {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });



  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });


  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  window.addEventListener('load', () => {
    aos_init();
  });


});