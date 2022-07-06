const nexticon = "<i class=\"fa-solid fa-arrow-right Caricon\"></i>"
const previcon = "<i class=\"fa-solid fa-arrow-left  Caricon\"></i>"


$(document).ready(function(){
    $('.carousel').owlCarousel({
        navText:[
            [$('.am-next'),$('.am-prev')]
        ],
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});