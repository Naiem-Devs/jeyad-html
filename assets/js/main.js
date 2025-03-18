
 // menu 
//  $('.siteBar-btn').click( function (event){ 
//     event.preventDefault()
//     $(this).toggleClass('active');   
//     $('.mobile-menu').toggleClass('siteBar');   
//   });

 var navbtn = document.querySelector(".siteBar-btn")
 var mobileNav = document.querySelector(".mobile-menu")
 var body = document.querySelector("body")

 navbtn.addEventListener('click', () => {
  navbtn.classList.toggle("active")
  mobileNav.classList.toggle("siteBar")
  body.classList.toggle("overflow-hidden")
 })


    var swiper = new Swiper(".wetherSwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      },
    });

    var swiper = new Swiper(".newsSwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-news-next",
        prevEl: ".swiper-news-prev",
      },
      breakpoints: {
        340: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      },
    });


    var swiper = new Swiper(".MomentsThumSwiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        340: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 3,
        },
      },
    });



    var swiper = new Swiper(".MomentsSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-Moments-next",
        prevEl: ".swiper-Moments-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    

    var swiper = new Swiper(".blogSwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-blog-next",
        prevEl: ".swiper-blog-prev",
      },
      breakpoints: {
        340: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      },
    });

    var swiper = new Swiper(".blogsSwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-blogs-next",
        prevEl: ".swiper-blogs-prev",
      },
      breakpoints: {
        340: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      },
    });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

