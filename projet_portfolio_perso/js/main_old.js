var typed = new Typed('.animatedSentence', {
    strings: ["Je suis Charles-Boris DAUVIER", "Apprenant développeur Web et Mobile"],
    typeSpeed: 60,
    startDelay: 30,
    loop: true
});

$(function(){
    $.scrollIt({
        scrollTime: 2000,
        topOffset: -50,
        easing: 'linear'
    });
});




$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop: true
    });
});

/* Initialisation Isotope */
$grid = $('.allProject').isotope({
    itemSelector: '.parentHovering',
    masonry: {
        columnWidth: 100,
        isFitWidth: true
    }
});

/* Lorsqu'on clique sur All, affiche tout et enlève classe à tous les éléments puis ajoute classe à All */
$("#all-filter").on("click", function () {
    $grid.isotope({ filter: '*' });
    $(".portfolioMenu").removeClass("active1");
    $("#all-filter").addClass("active1");
});

$("#js-filter").on("click", function () {
    $grid.isotope({ filter: '.js' });
    $(".portfolioMenu").removeClass("active1");
    $("#js-filter").addClass("active1");
});

$("#wordpress-filter").on("click", function () {
    $grid.isotope({ filter: '.wordpress' });
    $(".portfolioMenu").removeClass("active1");
    $("#wordpress-filter").addClass("active1");
});

$("#html-filter").on("click", function () {
    $grid.isotope({ filter: '.html' });
    $(".portfolioMenu").removeClass("active1");
    $("#html-filter").addClass("active1");
});


// Fonction pour afficher la div suivante
if (indice2>1) {
   var indice = indice2-1;
} else {
    var indice = 1;
}
function bouger(ind){

}
document.getElementById("rightArrowIcon").addEventListener("click", function() {
  // bouger(indice,"next");
    if (indice == 1) {
        document.getElementById("itAkademy").className = "cache";
        document.getElementById("driver").className = "visi";
        //document.getElementsByClassName("secondDate").className = "secondDate dateSelection";
        document.getElementById("army").className = "cache";
        indice ++;
        console.log("next 1"+indice);

    } else if (indice == 2) {
        document.getElementById("itAkademy").className = "cache";
        document.getElementById("driver").className = "cache";
        document.getElementById("army").className = "visi";
        indice ++;
        console.log("next 2"+indice);

    }
    else if (indice == 3) {
        document.getElementById("itAkademy").className = "visi";
        document.getElementById("driver").className = "cache";
        document.getElementById("army").className = "cache";
        console.log("next 3"+indice);
        indice = 1;
    }

});

// Fonction pour afficher la div précédente

if (indice>1) {
    var indice2 = indice-1;
} else {
    var indice2 = 1;
}
document.getElementById("leftArrowIcon").addEventListener("click", function() {

    if (indice2 == 1) {
        document.getElementById("itAkademy").className = "cache";
        document.getElementById("driver").className = "cache";
        //document.getElementsByClassName("secondDate").className = "secondDate dateSelection";
        document.getElementById("army").className = "visi";
        indice2 ++;
        console.log(indice2);

    } else if (indice2 == 2) {
        document.getElementById("itAkademy").className = "cache";
        document.getElementById("driver").className = "visi";
        document.getElementById("army").className = "cache";
        indice2 ++;
        console.log(indice2);

    }
    else if (indice2 == 3) {
        document.getElementById("itAkademy").className = "visi";
        document.getElementById("driver").className = "cache";
        document.getElementById("army").className = "cache";
        indice2 = 1;
    }

});

    window.addEventListener('scroll', onWindowScroll);

    function onWindowScroll(event) {

    const nav = document.getElementById('navBar');

    //console.log(window.pageYOffset);

    if (window.pageYOffset < 2488) {
        nav.classList.remove('overCarousel')
    } else {
        nav.classList.add('overCarousel')
    }
}



