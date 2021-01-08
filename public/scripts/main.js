$(document).ready(function(){
    var owl = $('.owl-carousel');
    /* Start Plugins */ 
    owl.owlCarousel({ // https://owlcarousel2.github.io/OwlCarousel2/
        loop: true,
        margin: 10,
        autoHeight: true,
        //nav: true, // Sao as setas
        autoplay: true,
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        items: 1
    });

    // Listeners
    owl.on('changed.owl.carousel', (e) => {        
        switch (e.page.index) {
            case 0: // COVID
                $('#owl-btn').attr('href', '#');
                break;
            case 1: // EPI
                $('#owl-btn').attr('href', '#');
                break;
            case 2: // Conselhos
                $('#owl-btn').attr('href', '#');
                break;
            case 3: // O Movimento
                $('#owl-btn').attr('href', '#');
                break;
            default:
                $('#owl-btn').attr('href', '#');
                break;
        }        
    });
});