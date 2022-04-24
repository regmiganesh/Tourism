
$(document).ready (function(){
    $('.humburger').click(function(){
        $('nav').toggleClass('show');
    });
});








var navbar = document.getElementById("navbar");
var menu = document.getElementById("nav");

window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
        
    }
    else{
        navbar.classList.remove("sticky");
    }
}






$(".carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    }
  })


function topscrollbtn(){
  window.scrollTo(0 ,100);
}