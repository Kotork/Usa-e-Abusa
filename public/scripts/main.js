$(document).ready(function(){
    var owlMain = $('.owl-carousel');
    /* Start Plugins */ 
    owlMain.owlCarousel({ // https://owlcarousel2.github.io/OwlCarousel2/
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
    owlMain.on('changed.owl.carousel', (e) => {        
        switch (e.page.index) {
            case 0: // COVID
                $('#owl-btn').attr('href', '#sectionInicio');
                break;
            case 1: // EPI
                $('#owl-btn').attr('href', '#sectionEPI');
                break;
            case 2: // Recomendações
                $('#owl-btn').attr('href', '#');
                break;
            case 3: // O Movimento
                $('#owl-btn').attr('href', '#sectionMovimento');
                break;
            default:
                $('#owl-btn').attr('href', '#sectionInicio');
                break;
        }        
    });
});