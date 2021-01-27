var a = null;
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

function changeText(e) {
    // Remove cor do botão atual e esconde o texto atual
    $(`#${ $('.virus-1').attr('data-text') }`).addClass('d-none');
    $('.virus-1').addClass('virus-2').removeClass('virus-1');

    // Adicona Cor ao botão clicado e mostra o texto
    $(e).addClass('virus-1').removeClass('virus-2');
    $(`#${ $(e).attr('data-text') }`).removeClass('d-none');    
}