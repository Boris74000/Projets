var typed = new Typed('.ban2', {
    strings: ["Barney Stinson", "Directeur de la commission de recherche à la GNB."],
    typeSpeed: 60,
    startDelay: 30,
    loop: true
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      loop: true
    });
});

$(function(){
    $.scrollIt({
        scrollTime: 3000,
        topOffset: 0,
        easing: 'linear'
    });
});

/* Change la classe du menu lorsqu'on clique sur le menu burger. */
$("#burger").on({
    click: function () {
        $(".navbarr ul").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Home
$("#list1").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur About me
$("#list2").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Certification
$("#list3").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Portfolio
$("#list4").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

// Masque le menu quand on click sur Contact
$("#list5").on({
    click: function () {
        console.log("ici");
        $("#listNav").toggleClass("deplacement")
    }
});

/* Initialisation Isotope */
$grid = $('.large_portfolio').isotope({
    itemSelector: '.litlePorfolio',
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
    console.log("y1");

});

$("#js-filter").on("click", function () {
    $grid.isotope({ filter: '.js' });
    $(".portfolioMenu").removeClass("active1");
    $("#js-filter").addClass("active1");
    console.log("y2");
});

$("#css-filter").on("click", function () {
    $grid.isotope({ filter: '.css' });
    $(".portfolioMenu").removeClass("active1");
    $("#css-filter").addClass("active1");
    console.log("y3");
});

$("#php-filter").on("click", function () {
    $grid.isotope({ filter: '.php' });
    $(".portfolioMenu").removeClass("active1");
    $("#php-filter").addClass("active1");
    console.log("y4");
});