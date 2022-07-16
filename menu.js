const PrimaryNav = document.querySelector('.primary-nav')
const navToggle   = document.querySelector('.mobile-nav-toggle')
const logoM = document.querySelector('.logo')
const Overall = document.querySelector('.overall')

navToggle.addEventListener("click" ,() =>{
    const Show = PrimaryNav.getAttribute("data-visibility")
    if (Show === "false"){
        PrimaryNav.setAttribute("data-visibility" , true)
        navToggle.setAttribute("aria-expanded", true)
        logoM.setAttribute("aria-expanded", true)
        Overall.setAttribute("aria-expanded", true)
    }
    else {
        PrimaryNav.setAttribute("data-visibility" , false)
        navToggle.setAttribute("aria-expanded", false)
        logoM.setAttribute("aria-expanded", false)
        Overall.setAttribute("aria-expanded", false)
    }
})
Overall.addEventListener("click",()=>{
    const Show = PrimaryNav.getAttribute("data-visibility")
    if (Show === "true"){
        PrimaryNav.setAttribute("data-visibility" , false)
        navToggle.setAttribute("aria-expanded", false)
        logoM.setAttribute("aria-expanded", false)
        Overall.setAttribute("aria-expanded", false)
    }
})




$(document).ready(function(){
    $('.carousel').owlCarousel({
        navText:[
            [$('.am-next'),$('.am-prev')]
        ],
        loop:true,
        margin:0,
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