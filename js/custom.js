// JavaScript Document
jQuery('#testimonials-owl').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
