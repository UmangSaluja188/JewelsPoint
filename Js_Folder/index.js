7// for scrolling effect 
window.addEventListener("scroll", function() {
    var header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    var header2 = document.getElementById('header2');
    header2.classList.toggle("newClass", window.scrollY > 0);
    //for scroll bottom to top
    var scroll = document.getElementById('ScrollTop');
    scroll.classList.toggle("active", window.scrollY > 500);


})

//for toggle  menu bars
$(document).ready(function() {
    $('.bars').click(function() {
        $('.menu').slideToggle();
    });
});
// FOR PRODUCTS

$('.js-filter').on('click', function() {

    var $color = $(this).attr('data-filter');
    console.log($color);
    if ($color == 'All') {
        $('.js-filterable').removeClass('is-hidden');
    } else {
        $('.js-filterable').addClass('is-hidden');
        $('.js-filterable[data-filter=' + $color + ']').removeClass('is-hidden');
    }


    //for anmation on scrolling
    $(window).scroll(function() {
        var positionTop = $(document).scrollTop();
        console.log(positionTop);
        if ((positionTop > 275) && (positionTop < 2355)) {
            $("#clip-container").addClass("animated bounceInLeft");

            //for scroll top button
           
        }
    });


    $('.scrollTop').click(function(){
          $(window).scrollTop()
          $("window").scrollTop( $("#topofthePage").offset().top );
    }); 

});
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 20,

        },
        1000: { slidesPerView: 5, spaceBetween: 30, }
    }
})